const express = require("express");
const app = express();


const welcomemessageotp = require("./utils/welcome-message-otp");


const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "alisarwar9596@gmail.com",  // sender address
        pass: "glitvxbumtbougc1"          // sender app passwaord
    }
});
const sendMail = async () => {
    try {
        const info = await transporter.sendMail({
            from: { address: "alisarwar9596@gmail.com", name: "Daraz App" },  // sender address
            to: ["alisarwar9211@gmail.com"],                                  // list of receivers
            subject: "Welcome to the Daraz App",                              // Subject line
            html: welcomemessageotp(786)                                      // html body
        });
        console.log("info", info.messageId);
    }
    catch (error) {
        console.error("Error sending email:", error);
    }
};


sendMail();


app.listen(3000);