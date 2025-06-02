import prisma from "../config/prismaConnect.js";
import { downloadpdf } from "../config/B2_db.js";

//create a new pdf here
export async function createpdf(req, res) {
    try {
        const userId = req.userData.id;
        const pdfData = req.pdfData;
        

        const { category, year, Department, Pyq_category } = req.body;
        if (!category || !year || !Department) {
            return res.status(409).json({
                msg: "Please fill all the details",
                success: false
            });
        }
        
        await prisma.pdf.create({
            data: {
                fileName: pdfData.fileName,
                category,
                year:parseInt(year),
                Department,
                Pyq_category: Pyq_category ? Pyq_category : null,
                posted_by: userId,
                expireAt: new Date(Date.now())
            }
        });
        return res.status(201).json({
            msg:"data uploaded",
            success:true
        });
    } catch (error) {
        console.log("error from createpdfcontroller", error.response?.data || error.message);
        return res.status(500).json({
            msg: "Server error try later",
            success: false
        });
    }
}

//to get name of all psf files
export async function getpdfnameController(req,res) {
    const { category,year,Department,Pyq_category } = req.query
    console.log(category,year,Department);
    
    try {
        const pdfs = await prisma.pdf.findMany({
            where: {
                ...(category && { category }),
                ...(year && { year:parseInt(year) }),
                ...(Department && { Department }),
                ...(category === "Pyqs" && Pyq_category && { Pyq_category})
            },
            select: {
                fileName:true,
                id:true
            }
        });

        

        return res.status(200).json({
            success: true,
            pdfs
        });
    } catch (error) {
        console.log(`error from getpdfnameController ${error} `);
    return res.status(500).json({
        success:false,
        msg:"Server Error try later"
    })
        
    }
    
}

//to get downloadlink of pdf files
export async function getpdflinkController(req,res) {
    const {fileName, pdfId} = req.query

    try {
        if(!fileName && !pdfId){
            return res.status(409).json({
                msg:"Please choose the file name or pdfId",
                success:false
            })
        };

        const filelink = await prisma.pdf.findFirst({
            where: {
                ...(fileName && { fileName }),
                ...(pdfId && { id: parseInt(pdfId) })
            },
            select: {
                
                pdf_Url: true,
                expireAt: true
            }
        });

        if(!filelink ){
            return res.status(400).json({
                success:false,
                msg:"No file found"
            })
        }

        if (filelink && filelink.expireAt > new Date(Date.now()) ) {
            return res.status(200).json({
                success:true,
                filelink
            })
        }
        

        const url = await downloadpdf(req,res,fileName)


        await prisma.pdf.update({
            where: {id:parseInt(pdfId)},
            data: {
                pdf_Url: url,
                expireAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                
            }
         });
         

        return res.status(200).json({
            success:true,
            url
        })
         
    } catch (error) {
        console.log("error from getpdflinkController",error.response?.data || error.message);
        return res.status(500).json({
            success:false,
            msg:"SErver Error try later"
        })
        
    }
}