import multer from 'multer'

const fileUploadOptions = () => {
    storage: multer.diskStorage({
        destination: (req: any, file: any, cb: any) => {
            console.log(req, file, cb);

        },
        filename: (req: any, file: any, cb: any) => {
            console.log('------', req, file, cb);


        }
    })
    // fileFilter: (req: any, file: any, cb: any) => { 

    // },
    // limits: {
    //     fieldNameSize: 255,
    //     fileSize: 1024 * 1024 * 2
    // }

    return 'aa'
}

export default {
    fileUploadOptions
}

