
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'

const Email: NextPage = () => {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(inputData);
        const response = await axios.post(`/api/sendEmail`, inputData)
        console.log(response);
        alert("Contact successfully sent!!")
    }

    return (
        <div className=''>
            <Head>
                <title>Next Email App</title>
                <meta name="description" content="Using sendgrid" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=''>
                <h1 className=''>
                    Contact
                </h1>
                <form className='' onSubmit={handleSubmit}>
                    <label className='' htmlFor="name">Full Name:</label><br />
                    <input className='' type="text" id="name" name="name" onChange={handleChange} /><br />

                    <label className='' htmlFor="email">Email:</label><br />
                    <input className='' type="text" id="email" name="email" onChange={handleChange} /><br /><br />

                    <label className='' htmlFor="message">Message:</label><br />
                    <textarea className='' id="message" name="message" rows={5} onChange={handleChange} /><br /><br />

                    <input type="submit" value="Submit" />
                </form>
            </main>
        </div>
    )
}

export default Email