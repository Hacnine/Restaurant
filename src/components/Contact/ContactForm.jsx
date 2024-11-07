import React from 'react'

const ContactForm = () => {
    return (
        <section className="bg-white p-8  shadow-md mb-12">
            <h2 className="text-2xl  text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input"
                        required
                    />
                </div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input"
                    required
                />
                <textarea
                    rows="6"
                    placeholder="Message"
                    className="w-full input"
                    required
                ></textarea>
                <button className="bg-yellow-400 text-white  py-3 px-6  shadow-md hover:bg-red-700 transition duration-300">
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default ContactForm
