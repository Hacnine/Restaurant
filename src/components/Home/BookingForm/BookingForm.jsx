import React, { useState } from 'react';
import SectionHeader from '../../Common/SectionHeader';
import Datepicker from 'react-tailwindcss-datepicker';

const BookingForm = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reservationDate: '',
    totalPeople: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    error: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "totalPeople" && value < 1) {
      alert("Total people must be a positive number");
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reservationDate = value.startDate;

    const formSubmission = {
      ...formData,
      reservationDate: reservationDate || formData.reservationDate,
    };

    try {
      const response = await fetch("https://formspree.io/f/xgegevnr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formSubmission)
      });

      if (response.ok) {
        setStatus({ submitted: true, success: true, error: false });
        setFormData({
          name: '',
          email: '',
          reservationDate: '',
          totalPeople: '',
          message: '',
        });
        setValue({ startDate: null, endDate: null });
      } else {
        setStatus({ submitted: true, success: false, error: true });
      }
    } catch (error) {
      setStatus({ submitted: true, success: false, error: true });
    }
  };

  return (
    <div className="bg-booking bg-cover text-white px-8 pt-8 pb-16 wrapper">
      <SectionHeader inspirationWord={"Book Now"} title={"BOOK YOUR TABLE"} />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className={`w-full input text-black  ${formData.name ? 'bg-[#e8f0ff]' : 'bg-transparent'}`}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full input  text-black ${formData.email ? 'bg-[#e8f0ff]' : 'bg-transparent'}`}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Datepicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            inputClassName={`w-full input pl-10 text-black ${value.startDate ? 'bg-[#e8f0ff]' : 'bg-transparent'}`}
            placeholder="Reservation Date"
          />

          <input
            type="number"
            name="totalPeople"
            placeholder="Total People"
            value={formData.totalPeople}
            onChange={handleChange}
            className={`w-full input text-black  ${formData.totalPeople ? 'bg-[#e8f0ff]' : 'bg-transparent'}`}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full input text-black ${formData.message ? 'bg-[#e8f0ff]' : 'bg-transparent'}`}
          rows="4"
        />

        <button
          type="submit"
          className="w-fit bg-yellow-500 text-black px-4 py-3 font-semibold hover:bg-yellow-600 transition duration-300"
        >
          BOOK NOW
        </button>
      </form>

      {status.submitted && status.success && (
        <p className="mt-4 text-green-500">Booking request submitted successfully!</p>
      )}
      {status.submitted && status.error && (
        <p className="mt-4 text-red-500">Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default BookingForm;
