import multer from 'multer';

// Multer configuration
const storage = multer.memoryStorage(); // Use memory storage

const fileFilter = (req, file, cb) => {
    console.log(`logging file data ${JSON.stringify(file)}`);
    
    if (
        file.mimetype === 'image/jpeg' || 
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/webp' || 
        file.mimetype === 'image/avif' ||
        file.mimetype === 'application/pdf'
      ) {
        cb(null, true);
      } else {
        cb(new Error('Only JPEG, PNG, WebP, and AVIF image and pdfs files are allowed!'), false);
      }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 5MB 
});

export default upload;
