"use client";

import axios from "axios";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { countries } from "@/data/countryCode";
// import MainHeading from "./Heading/MainHeading";

const Form = () => {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "userPhone" ? value.replace(/\D/g, "") : value,
    }));

    if (name === "userPhone" && value.replace(/\D/g, "").length < 10) {
      setErrorMessage("Please enter a valid number");
    } else {
      setErrorMessage("");
    }

    if (name === "userEmail") {
      setEmailErrorMessage(
        !emailRegex.test(value) ? "Please enter a valid email address" : ""
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (formData.userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      setFormRes(false);
      return;
    }

    if (!emailRegex.test(formData.userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      setFormRes(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "sumit",
          email: formData.userEmail,
          Name: formData.userName,
          Contact: `${formData.userPhone}`,
          Description: formData.userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
          userPhone: "",
          countryCode: "+91",
        });
        setFormRes(false);
        // router.push("/thank-you/");
        alert("Form submitted successfully!");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      setFormRes(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 text-base w-full h-full  rounded-lg text-secondary"
      id="contact"
    >
      {/* <div className="flex flex-col gap-2">
        <MainHeading
          title="Craving authentic asian flavors ?"
          className="mediumHeading font_go font-semibold text-white text-center"
        />
        <p className="description1 text-white text-center">
          Reach out to us – your taste adventure starts here!
        </p>
      </div> */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <label htmlFor="Name" className="text-sm text-[#222]">Name</label>
          <input
            id="Name"
            type="text"
            name="userName"
            placeholder="Full Name*"
            value={formData.userName}
            onChange={handleChange}
            required
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          {/* <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            required
            className="text-sm text-[#222] outline-none px-1 py-3 rounded-lg"
            style={{ width: `${formData.countryCode.length + 5}ch` }}
          >
            {countries.map((country, i) => (
              <option key={i} value={country.code}>
                {country.code}
              </option>
            ))}
          </select> */}
          <label htmlFor="phone" className="text-sm text-[#222]">Phone</label>
          <input
            type="text"
            name="userPhone"
            placeholder="Phone Number*"
            value={formData.userPhone}
            onChange={handleChange}
            required
            maxLength={10}
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300 no-spinner"
          />
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <label htmlFor="email" className="text-sm text-[#222]">Email</label>
          <input
            type="text"
            name="userEmail"
            placeholder="Email Address"
            value={formData.userEmail}
            onChange={handleChange}
            required
           className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300"
          />
        </div>
        {emailErrorMessage && (
          <p className="text-red-500">{emailErrorMessage}</p>
        )}

        <div className="flex gap-3 flex-col bg-white rounded-lg overflow-hidden">
          <label htmlFor="message" className="text-sm text-[#222]">Message</label>
          <textarea
            name="userMessage"
            placeholder="Tell us something about your enquiry!"
            value={formData.userMessage}
            onChange={handleChange}
            rows={5}
            className="w-full h-max px-4 py-3 outline-none focus:outline-none bg-transparent border border-gray-300"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary text-sm text-white px-5 py-3 font-normal capitalize hover:bg-primary/80 duration-500 border"
      >
        {formRes ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default Form;
