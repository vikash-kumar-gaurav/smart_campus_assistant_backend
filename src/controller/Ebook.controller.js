
import { downloadpdf } from '../config/B2_db.js';
import prisma from '../config/prismaConnect.js'

//to create a new ebook
export async function createEbookController(req,res){
    try {
        
        const { book_name, writer, genre, description } = req.body
        const pdfThumbnail = req.cloudinaryUrls
        console.log(book_name,genre,description,writer);
        
        if(! req.file){
            return res.status(404).json({
                success:false,
                msg:"No file found in createEbook"
            })
        }
        
        

       

        const pdf_name = req.file?.originalname
      

        const result = await prisma.Ebook.create({
            data:{
                writer,
                book_name,
                pdf_name,
                genre,
                description,
                pdf_thumbnail:{
                    create:{
                        image_url:pdfThumbnail.URL,
                        public_id:pdfThumbnail.public_id
                    }
                },
                pdf_url_createdAt:new Date()
            }
        })
        return res.status(200).json({
            succes:true,
            msg:"Ebook added",
            result
        })
        
    } catch (error) {
        console.error('Error from createEbookController:', error);
        return res.status(500).json({
            msg:"Server error try later",
            success:false
        })
        
    }
}

//to retrive the pdf links from b2
export async function getAllEbook(req, res) {
  try {
    // Read page and limit from query, with defaults
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    console.log(page,limit);
    

    // Get total books count for pagination
    const totalBooks = await prisma.ebook.count();

    // Fetch books for this page
    const books = await prisma.ebook.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }, // optional: show recent books first
      include: {
        pdf_thumbnail: true,
      },
    });

    if (!books || books.length === 0) {
      return res.status(404).json({
        success: false,
        msg: "No books found",
      });
    }

    return res.status(200).json({
      success: true,
      books,
      currentPage: page,
      totalPages: Math.ceil(totalBooks / limit),
      totalItems: totalBooks,
    });
  } catch (error) {
    console.log("error from getAllEbook", error);
    return res.status(500).json({
      success: false,
      msg: "Server error, try later",
    });
  }
}


//to get link of specific Ebook
export async function getEbookLink(req,res) {
    try {
        const { EbookId, Ebook_name } = req.body
        
        
        
        if(!EbookId || !Ebook_name){
            return res.status(409).json({
            success:false,
            msg:"Please fill all the credientials"
        })
        }

        const Ebook = await prisma.Ebook.findUnique({
            where:{
                id:parseInt(EbookId,)
                
            },
            
        })

        if(Ebook && Ebook.pdf_url && new Date(Ebook.pdf_url_createdAt) > new Date()) {
          return res.status(200).json({
            pdf_link:Ebook.pdf_url,
            succes:true
        })  
        }
        let new_link = ''
        if(!Ebook || !Ebook.pdf_url || new Date(Ebook.pdf_url_createdAt) > new Date()){
            new_link =await downloadpdf(req,res,Ebook_name)
            await prisma.Ebook.update({
                where:{id:parseInt(EbookId)},
                data:{
                    pdf_url:new_link,
                    pdf_url_createdAt: new Date(Date.now() + 7*24*60*60*1000) //7 days
                }
            })

        }

        return res.status(200).json({
            pdf_link:new_link,
            succes:true
        })
    } catch (error) {
        console.log("Error from getEbookLink",error);
        
        return res.status(500).json({
            msg:"Server Error try later",
            success:false
        })
    }
}
