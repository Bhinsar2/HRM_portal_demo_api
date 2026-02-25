// ============================================================
// FILE UPLOAD SERVICE (multer) — COMMENTED OUT
// Uncomment to re-enable image/file upload functionality
// ============================================================

// const multer = require('multer');

// const storageEngine = multer.diskStorage({
//     destination:(req,file,cb) =>
//     {
//         console.log('Multer Storage Engine');
//         if(file.fieldname==='profile')
//             cb(null,'./storage/images/profile/')
//         else if(file.fieldname==='image')
//             cb(null,'./storage/images/teams');
//         else
//             cb(null,false);
//     },
//     filename:(req,file,cb)=>{
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
//     }
// })

// const fileFilter = (req,file,cb) =>{
//     console.log('File Filter Method Called');
//     console.log('Logging File '+file);
//     if(file === 'undefined')
//     {
//         console.log('undefined hai')
//         cb(null,false);
//     }
//     else if(file.fieldname==='image')
//     {
//         if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ||file.mimetype === 'image/jpeg')
//             cb(null,true)
//         else
//             cb(null,false)
//     }
//     else if(file.fieldname==='video')
//     {
//         if(file.mimetype==='video/mp4')
//             cb(null,true)
//         else
//             cb(null,false)
//     }
//     else
//         cb(null,false);
// }

// const upload = multer({storage:storageEngine});
// module.exports = upload;

// Stub so route imports don't crash while upload is disabled
// single() returns a no-op middleware that simply calls next()
const upload = {
    single: (fieldname) => (req, res, next) => next()
};
module.exports = upload;