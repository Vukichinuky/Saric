import { useState } from 'react'

export default function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('')

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault()
        setStatus('Sending...')

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        })

        const data = await response.json()

        if (response.ok) {
            setStatus(data.message)
            setName('')
            setEmail('')
            setMessage('')
        } else {
            setStatus('Failed to send email')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

            <button type="submit">Send</button>

            {status && <p>{status}</p>}
        </form>
    )
}
