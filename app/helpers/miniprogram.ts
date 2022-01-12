import multer from "multer";
import fs from 'fs'
import path from 'path'
import { setPathMiniProgram } from "configs/config";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		// cb(null, 'tmp/uploads')

		let path = setPathMiniProgram()
		cb(null, path)
	},
	filename: function (req, file, cb) {
		// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
		let { mimetype, originalname } = file

		let ts = new Date().getTime() + ''
		let type = mimetype.split('/')[1]
		cb(null, ts  +'.' + type)
	}
})

// const  fileFilter =  (req, file, cb)=> {
//   // The function should call `cb` with a boolean
//   // to indicate if the file should be accepted
//   // To reject this file pass `false`, like so:
//   cb(null, false)
//   // To accept the file pass `true`, like so:
//   cb(null, true)
//   // You can always pass an error if something goes wrong:
//   cb(new Error('I don\'t have a clue!'))
// }


const limits = {
	fieldNameSize: 255,
	fileSize: 1024 * 1024 * 20
}

export const miniprogram = multer({ storage: storage, limits })
