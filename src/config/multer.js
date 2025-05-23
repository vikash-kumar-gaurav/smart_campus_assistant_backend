import multer from 'multer';

// Multer configuration
const storage = multer.memoryStorage(); // Use memory storage

const ImgfileFilter = (req, file, cb) => {
    
    
    if (
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/webp' || 
        file.mimetype === 'image/avif' 
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only JPEG, PNG, WebP, and AVIF image  files are allowed!'), false);
      }
};

const pdffileFilter = (req, file, cb) => {
    
    
    if (
        
        file.mimetype === 'application/pdf'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only  pdfs files are allowed!'), false);
      }
};

 export const Imgupload = multer({
    storage: storage,
    fileFilter: ImgfileFilter,
    limits: { fileSize:  5 * 1024 *1024 } // Limit file size 
});

export const Pdfupload = multer({
  storage:storage,
  fileFilter:pdffileFilter,
  limits:{ fileSize: 15 * 1024 *1024}
})
