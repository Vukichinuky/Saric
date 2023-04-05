import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [formMessage, setFormMessage] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await fetch("https://www.dev-drop.com/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setFormMessage(data.message);
            setFormData({ email: "", message: "" });
        } catch (error) {
            console.error(error);
            setFormMessage("Something went wrong.");
        }
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Send</button>
            {formMessage && <p>{formMessage}</p>}
        </form>
    );
};

export default ContactForm;
