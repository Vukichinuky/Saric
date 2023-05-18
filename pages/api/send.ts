import type { NextApiRequest,NextApiResponse } from "next";
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
type Data = {
    success:boolean}
    export default async (req:NextApiRequest,res:NextApiResponse<Data>)=>{
        if(req.method === 'POST'){
            const {name, email, message}: {name:string, email:string,message:string} = req.body
        const msg = {
            to: 'gudraliin@gmail.com',
            from: 'gudraliin@gmail.com',
            subjext: '${name.toUpperCase()} poslao vam je email sa sajta',
            text: 'Email => ${email}',
            html: '<strong>${message}</strong>',
        }
        try{
            await sgMail.send(msg)
            res.status(200).json({success:true})
        }
        catch(err){ res.status(400).json({success:false})
        
        }}}