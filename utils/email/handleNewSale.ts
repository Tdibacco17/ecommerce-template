import { NewSaleRequestInterface } from "@/types/contactTypes";
import { newSaletemplateHtml } from "./newSaleTemplateHtml";
const nodemailer = require("nodemailer");

export async function handleNewSale(body: NewSaleRequestInterface) {
    try {
        const contentHtml = newSaletemplateHtml(body)

        const transporter = nodemailer.createTransport({
            host: `${process.env.EMAIL_SERVICE}`,
            port: process.env.EMAIL_PORT,
            secure: true,
            auth: {
                user: `${process.env.GMAIL_USER}`,
                pass: `${process.env.GMAIL_PASS}`
            }
        });
        const mailOptions = {
            from: `Nombre de la marca ${process.env.GMAIL_USER}`,
            to: [`${process.env.GMAIL_USER}`, body.email],
            subject: "Nueva venta",
            html: contentHtml,
        };

        const server = await new Promise((resolve, reject) => {
            transporter.verify(function (error: any, success: any) {
                if (success) {
                    resolve(success)
                }
                reject(error)
            })
        })
        if (!server) {
            return { message: "Error instantiating smtp transporter", status: 500 };
        }

        const success = await new Promise((resolve, reject) => {

            transporter.sendMail(mailOptions).then((info: any, err: any) => {
                if (info.response.includes('250')) {
                    resolve(true)
                }
                reject(err)
            })
        })

        if (!success) {
            return { message: "An error occurred sending your email", status: 500 };
        }
        return { message: "Message sent", status: 200 };
    } catch (error) {
        return { message: "Catch error", status: 500 };
    }
}