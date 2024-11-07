import React from 'react'

const ContactDetails = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-12">
            <div className="text-center bg-gray-100 p-6  shadow-md">
                <h3 className="text-xl  text-gray-800">Our Location</h3>
                <p className="text-gray-600 mt-2">123 Main Street, Jeddah, Saudi Arabia</p>
            </div>
            <div className="text-center bg-gray-100 p-6  shadow-md">
                <h3 className="text-xl  text-gray-800">Phone</h3>
                <p className="text-gray-600 mt-2">+966 123 456 789</p>
                <p className="text-gray-600">+966 987 654 321</p>
            </div>
            <div className="text-center bg-gray-100 p-6  shadow-md">
                <h3 className="text-xl  text-gray-800">Email</h3>
                <p className="text-gray-600 mt-2">contact@yourrestaurant.com</p>
            </div>
        </section>
    )
}

export default ContactDetails
