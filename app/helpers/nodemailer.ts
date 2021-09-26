const nodemailer = require('nodemailer'); //引入模块
let transporter = nodemailer.createTransport({
    //node_modules/nodemailer/lib/well-known/services.json  查看相关的配置，如果使用qq邮箱，就查看qq邮箱的相关配置
	service: 'qq', //类型qq邮箱
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: '191209981@qq.com', // 发送方的邮箱
		pass: 'qmuiqrqduwoxcbbe' // smtp 的授权码
	}
});
//pass 不是邮箱账户的密码而是stmp的授权码（必须是相应邮箱的stmp授权码）
//邮箱---设置--账户--POP3/SMTP服务---开启---获取stmp授权码

async function sendMail(content) {
	// 发送的配置项
	let mailOptions = {
		from:  '191209981@qq.com', // 发送方
		to: 'qp1984@live.com', //接收者邮箱，多个邮箱用逗号间隔
		subject: '欢迎来到"Express-demo"', // 标题
		text: 'Hello world?', // 文本内容
		html: `<p>${content}</p>`, //页面内容
		// attachments: [{//发送文件
		// 		filename: 'index.html', //文件名字
		// 		path: './index.html' //文件路径
		// 	},
		// 	{
		// 		filename: 'sendEmail.js', //文件名字
		// 		content: 'sendEmail.js' //文件路径
		// 	}
		// ]
	};

	//发送函数
let info = await	transporter.sendMail(mailOptions);
return info

}

export default sendMail

