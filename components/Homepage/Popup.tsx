import { motion } from "framer-motion";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface JoinFormProps {
  handleClose: () => void;
}

const JoinForm: React.FC<JoinFormProps> = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    country: "",
    identity: "",
    enquiry: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      phone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50 "
    >
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg bg-white p-8 rounded-lg relative space-y-8 px-10"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl font-semibold mb-4">Join Omaira</h2>
        <p className="text-lg mb-8">
          Fill out the form below to join Omaira and revolutionize the world of
          real-world assets.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Organisation"
            className="input-field"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input-field"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="phone-input-container">
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                required: true,
                name: "phone",
              }}
            />
          </div>
          <input
            type="text"
            placeholder="Country"
            className="input-field"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <select
            className="input-field"
            name="identity"
            value={formData.identity}
            onChange={handleChange}
          >
            <option value="">Identify yourself</option>
            <option value="Asset Owner">Asset Owner</option>
            <option value="Individual Investor">Individual Investor</option>
            <option value="Institutional Investor">
              Institutional Investor
            </option>
          </select>
          <textarea
            placeholder="Enquiry details (max 500 words)"
            className="input-field col-span-2"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleChange}
            rows={6}
          />
        </div>
        <button
          type="submit"
          className="primary-btn justify-end self-center px-8 py-0 h-10 w-36 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded"
        >
          Submit
        </button>
      </motion.form>
    </motion.div>
  );
};

export default JoinForm;
