import { useState } from 'react'
import Polja from './Polja'
import TextArea from './Textarea'
import { validate } from '../utils/validate'
import Image from 'next/image'

interface IValues {
    name: string
    email: string
    message: string
}

interface IErrors extends Partial<IValues> { }

export default function EmailForm() {
    const [values, setValues] = useState<IValues>({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState<IErrors>({})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validate(values)
        if (errors && Object.keys(errors).length > 0) {
            return setErrors(errors)
        }
        setErrors({})
        setLoading(true)
        try {
            const res = await fetch('../api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            if (res.ok) {
                setValues({ name: '', email: '', message: '' })
            }
        } catch (err) {
            console.log(err)
        }
        setLoading(false)
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setValues((prevInput) => ({ ...prevInput, [e.target.name]: e.target.value }))
    }

    return (
        <div className=" ">
            <div className="">

                <form
                    className="flex flex-col pb-10 items-center w-full mx-auto sm:w-1/2 md:w-1/2 xl:w-1/3"
                    onSubmit={handleSubmit}
                >
                    <Polja
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        name="name"
                        label="Your Name"
                        placeholder="JhonDoe"
                        error={!!errors.name}
                        errorMessage={!!errors.name ? errors.name : ''}
                    />
                    <Polja
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        name="email"
                        label="Your Email"
                        placeholder="jhondoe@gmail.com"
                        error={!!errors.email}
                        errorMessage={!!errors.email ? errors.email : ''}
                    />
                    <TextArea
                        value={values.message}
                        onChange={handleChange}
                        id="message"
                        name="message"
                        label="Your message to me"
                        placeholder="Hi There!"
                        error={!!errors.message}
                        errorMessage={!!errors.message ? errors.message : ''}
                    />
                    <button
                        className="w-full py-2 mt-6 text-lg text-white bg-teal-700 rounded-full outline-none active:bg-teal-300 focus:ring-2 focus:ring-purple-400 disabled:bg-opacity-60 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={loading}
                    >
                        {!loading ? (
                            'Submit'
                        ) : (
                            <div className="flex items-center justify-center w-full h-full ">
                                <Image src="/loader.svg" className="animate-spin" width="30" height="30" alt={''} />
                            </div>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}