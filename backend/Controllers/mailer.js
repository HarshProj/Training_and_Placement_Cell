const nodemailer = require("nodemailer");
const Mailgen = require('mailgen');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: process.env.Email,
        pass: process.env.Password
    }
});

const mailgenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Training & Placement Cell",
        link: "https://your-website.com"  // update this with your real project URL if any
    }
});

const registermail = async (req, res) => {
    const { username, useremail, text, subject } = req.body;

    if (!useremail || !username || !text) {
        return res.status(400).json({ msg: "Required fields: username, useremail, text (OTP)" });
    }

    const emailTemplate = {
        body: {
            name: username,
            intro: `Your OTP is: **${text}**`,
            outro: 'If you did not request this OTP, please ignore this email.'
        }
    };

    try {
        const emailBody = await mailgenerator.generate(emailTemplate);

        const message = {
            to: useremail,
            subject: subject || "Your OTP Code",
            text: `Your OTP is: ${text}`,
            html: emailBody
        };

        await transporter.sendMail(message);

        return res.status(200).send({ msg: "OTP email sent successfully." });

    } catch (error) {
        console.error("Mail error:", error);
        return res.status(500).send({ error: "Failed to send email." });
    }
};

module.exports = registermail;
