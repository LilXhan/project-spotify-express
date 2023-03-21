import multer from 'multer';

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function(req, file, cb){
    // mi-cv.pdf mi-foto.png mi-video.mp4
    const ext = file.originalname.split('.').pop();
    const filename = `file-${Date.now()}.${ext}` // file-213123.mp3
    cb(null, filename)
  }
})

const uploadMiddleware = multer({
  storage: storage
})


export default uploadMiddleware;