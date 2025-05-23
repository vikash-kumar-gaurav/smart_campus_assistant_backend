import B2 from 'backblaze-b2'


const b2 = new B2({
    applicationKeyId: process.env.B2_KEY_ID,
    applicationKey:process.env.B2_APP_KEY
})
///this function is used to upload pdfs to b2 with the help of cloudinary
export async function uploadPdfs(req,res,next) {

    const role = req.userData.role
    try {

        if(role !=="faculty" && role !=="admin"){
            return res.status(403).json({
                msg:"Students are not authorized to do this.",
                success:false
            })
        }
        await b2.authorize();
        
        const file = req.file
        if(!req.file || !req.file?.buffer){
            return res.status(409).json({
                msg:"Please provide all credientials",
                success:false
            })
        };

        const  { data : uploadUrl } = await b2.getUploadUrl({bucketId:process.env.B2_BUCKET_ID});

        const uploadResult = await b2.uploadFile({
            uploadUrl:uploadUrl.uploadUrl,
            uploadAuthToken:uploadUrl.authorizationToken,
            fileName:file.originalname,
            data:file.buffer,
            mime:file.mimetype
        });
        
        
        req.pdfData = uploadResult.data
        return  next()
    } catch (error) {
        console.log(`error from uploadPdfs ${error}`);
        return res.status(500)
        
    }
}

///this function is used to retrive the downloadlink of the pdfs from b2 because without prepaid b2 is private and private does not return url as cloudinary do 
export async function downloadpdf(req,res,fileName) {
    try {
        
        await b2.authorize()
        const BaseURL = b2.downloadUrl;
        

   
       const {data} = await b2.getDownloadAuthorization({
        bucketId:process.env.B2_BUCKET_ID,
        fileNamePrefix:fileName,
        validDurationInSeconds:7*24*60*60
       })

       const downloadUrl = `${BaseURL}/file/${process.env.B2_BUCKET_NAME}/${fileName}?Authorization=${data.authorizationToken}`;
   

       return downloadUrl
    } catch (error) {
        console.log("error in downloadpdf ",error.response?.data || error.message);
        return res.status(500).json({
            success:false
        })
    }
    
}