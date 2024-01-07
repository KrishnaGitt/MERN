const nodeMailer=require("nodemailer")

const sendEmail=async(option)=>{
    console.log("inside sendemial",option)
const transporter=nodeMailer.createTransport({
    host: "smtp.example.com",
    port: 465,
    service:process.env.SMPT_SERVICE,
    auth:{
        user:process.env.SMPT_MAIL,
        pass:process.env.SMPT_PASSWORD
    }
})
const mailOption={
    from:process.env.SMPT_MAIL,
    to:option.email,
    subject:option.subject,
    text:option.message
}
console.log("mail option",mailOption)
 await transporter.sendMail(mailOption)
}

module.exports=sendEmail  