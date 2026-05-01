"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// Add these variables to .env file
const REACT_APP_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const REACT_APP_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const REACT_APP_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC || "";

interface FormDataType {
  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone: string;
  countryCode: string;
}

interface ErrorsType {
  userName?: string;
  userEmail?: string;
  userPhone?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });
  const [formRes, setFormRes] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone number formatting function
  const formatPhoneNumber = (value: string): string => {
    const v = value.replace(/\D/g, "").slice(0, 10);
    let f = "";
    if (v.length > 0) f = "(" + v.slice(0, 3);
    if (v.length >= 4) f += ") " + v.slice(3, 6);
    if (v.length >= 7) f += "-" + v.slice(6, 10);
    return f;
  };

  // Validation function
  const validateForm = (): ErrorsType => {
    const errors: ErrorsType = {};
    
    if (!formData.userName.trim()) {
      errors.userName = "This field is required.";
    }
    
    if (!formData.userEmail.trim()) {
      errors.userEmail = "This field is required.";
    } else if (!emailRegex.test(formData.userEmail)) {
      errors.userEmail = "Enter a valid e-mail address.";
    }
    
    if (!formData.userPhone.trim()) {
      errors.userPhone = "This field is required.";
    } else {
      const cleanPhone = formData.userPhone.replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        errors.userPhone = "Please enter a valid 10-digit phone number.";
      }
    }
    
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    
    if (name === "userPhone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedPhone,
      }));
      
      if (errorMessage) setErrorMessage("");
      if (submitted) setSubmitted(false);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      
      if (name === "userEmail" && emailErrorMessage) setEmailErrorMessage("");
      if (name === "userName" && errorMessage) setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      if (errors.userEmail) setEmailErrorMessage(errors.userEmail);
      if (errors.userPhone) setErrorMessage(errors.userPhone);
      if (errors.userName) setErrorMessage(errors.userName);
      return;
    }

    setFormRes(true);
    setEmailErrorMessage("");
    setErrorMessage("");

    // Prepare template parameters for EmailJS
    const templateParams = {
      first_name: formData.userName.split(" ")[0] || "",
      last_name: formData.userName.split(" ").slice(1).join(" ") || "",
      email: formData.userEmail,
      phone: formData.userPhone,
      message: formData.userMessage || "",
    };

    try {
      await emailjs.send(
        REACT_APP_EMAILJS_SERVICE_ID,
        REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY
      );
      
      // Reset form on success
      setFormData({
        userName: "",
        userEmail: "",
        userMessage: "",
        userPhone: "",
        countryCode: "+91",
      });
      setFormRes(false);
      setSubmitted(true);
    } catch (error) {
      console.error("Email error:", error);
      setFormRes(false);
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  // Success UI
  if (submitted) {
    return (
      <div className="w-full">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-4xl mb-3">✅</div>
          <div className="text-green-800 text-lg font-semibold mb-2">
            Thank you!
          </div>
          <div className="text-green-600">
            Your message has been submitted successfully. We&apos;ll get back to you soon.
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 text-green-600 hover:text-green-700 underline text-sm"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-base w-full h-full rounded-lg text-secondary"
      id="contact"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <label htmlFor="Name" className="text-sm text-[#222]">
            Name
          </label>
          <input
            id="Name"
            type="text"
            name="userName"
            placeholder="Full Name*"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300 focus:border-blue-500 transition-colors"
          />
        </div>
        
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <label htmlFor="phone" className="text-sm text-[#222]">
            Phone
          </label>
          <input
            type="tel"
            name="userPhone"
            placeholder="(555) 555-5555"
            value={formData.userPhone}
            onChange={handleChange}
            required
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300 focus:border-blue-500 transition-colors no-spinner"
          />
          <p className="text-xs text-gray-500 px-1">Format: (123) 456-7890</p>
        </div>
        
        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}
        
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <label htmlFor="email" className="text-sm text-[#222]">
            Email
          </label>
          <input
            type="email"
            name="userEmail"
            placeholder="Email Address"
            value={formData.userEmail}
            onChange={handleChange}
            required
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300 focus:border-blue-500 transition-colors"
          />
          <p className="text-xs text-gray-500 px-1">example@example.com</p>
        </div>
        
        {emailErrorMessage && (
          <p className="text-red-500 text-sm">{emailErrorMessage}</p>
        )}

        <div className="flex gap-3 flex-col bg-white rounded-lg overflow-hidden">
          <label htmlFor="message" className="text-sm text-[#222]">
            Message
          </label>
          <textarea
            name="userMessage"
            placeholder="Tell us something about your enquiry!"
            value={formData.userMessage}
            onChange={handleChange}
            rows={5}
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={formRes}
        className="bg-primary text-sm text-white px-5 py-3 font-normal capitalize hover:bg-primary/80 duration-500 border disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formRes ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;