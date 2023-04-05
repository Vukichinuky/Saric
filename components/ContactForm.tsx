import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [formMessage, setFormMessage] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/sendEmail", formData);
            setFormMessage(res.data.message);
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
