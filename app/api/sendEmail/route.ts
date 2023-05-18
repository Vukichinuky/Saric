import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email, message } = req.body;

    const msg = {
        to: 'gudraliin@gmail.com', // Change this to the recipient's email address
        from: 'sender@example.com', // Change this to the sender's email address
        subject: 'New Email from Website',
        text: `${email} says: ${message}`,
    };

    try {
        await sgMail.send(msg);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Failed to send email' });
    }
};

export default sendEmail;
