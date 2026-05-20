"use client";
import { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import emailjs from "@emailjs/browser";
import useClickOutside from "@/hooks/useClickOutside";
import { exteriorProductspageData } from "@/data/pageData";
import { MainHeading, Section } from "@/components";

const REACT_APP_EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_2;

const REACT_APP_EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2;

const REACT_APP_EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_2;

const CustomQuotationRequest = () => {
  const items = [
    "Please select",
    ...exteriorProductspageData.productsCategory.products,
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  // Separate search terms for each dropdown (optional - if you want independent search)
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const [searchTerm4, setSearchTerm4] = useState("");
  const [searchTerm5, setSearchTerm5] = useState("");

  const dropDown1 = useRef<HTMLDivElement | null>(null);
  const dropDown2 = useRef<HTMLDivElement | null>(null);
  const dropDown3 = useRef<HTMLDivElement | null>(null);
  const dropDown4 = useRef<HTMLDivElement | null>(null);
  const dropDown5 = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropDown1, () => {
    if (isOpen) setIsOpen(false);
  });
  useClickOutside(dropDown2, () => {
    if (isOpen1) setIsOpen1(false);
  });
  useClickOutside(dropDown3, () => {
    if (isOpen2) setIsOpen2(false);
  });
  useClickOutside(dropDown4, () => {
    if (isOpen3) setIsOpen3(false);
  });
  useClickOutside(dropDown5, () => {
    if (isOpen4) setIsOpen4(false);
  });

  // Filter functions for each dropdown
  const filteredItems1 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm1.toLowerCase()),
  );
  const filteredItems2 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm2.toLowerCase()),
  );
  const filteredItems3 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm3.toLowerCase()),
  );
  const filteredItems4 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm4.toLowerCase()),
  );
  const filteredItems5 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm5.toLowerCase()),
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",

    product1: "",
    product2: "",
    product3: "",
    product4: "",
    product5: "",

    quantity1: "",
    quantity2: "",
    quantity3: "",
    quantity4: "",
    quantity5: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const itemsData = `
          Item 1:
          Product: ${formData.product1}
          Quantity: ${formData.quantity1}

          Item 2:
          Product: ${formData.product2}
          Quantity: ${formData.quantity2}

          Item 3:
          Product: ${formData.product3}
          Quantity: ${formData.quantity3}

          Item 4:
          Product: ${formData.product4}
          Quantity: ${formData.quantity4}

          Item 5:
          Product: ${formData.product5}
          Quantity: ${formData.quantity5}
          `;

      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: `
          ${formData.address1}
          ${formData.address2}
          ${formData.city}
          ${formData.state}
          ${formData.zipCode}
      `,
        items: itemsData,
      };

      await emailjs.send(
        REACT_APP_EMAILJS_SERVICE_ID!,
        REACT_APP_EMAILJS_TEMPLATE_ID!,
        templateParams,
        REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      setSubmitSuccess(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipCode: "",
        quantity1: "",
        quantity2: "",
        quantity3: "",
        quantity4: "",
        quantity5: "",
        product1: "",
        product2: "",
        product3: "",
        product4: "",
        product5: "",
      });
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send quotation request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <div className="max-w-5xl mx-auto w-full px-4">
        <MainHeading
          h2
          title="Custom Quotation Request"
          className="font-bold manrope !text-primary text-center capitalize mb-8 mediumHeading"
        />
        <div className="max-w-3xl mx-auto w-ful shadow-2xl rounded-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 p-8 w-full border-b border-gray-300">
              {/* Name */}
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      First Name
                    </span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>
              {/* Contact */}
              <div className="grid grid-cols-2 gap-4">
                {/* Email */}
                <div className="w-full flex gap-3 flex-col">
                  <span className="description3 text-tertiary">Email</span>
                  <input
                    type="email"
                    placeholder="example@example"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    example@example.com
                  </span>
                </div>
                {/* Phone */}
                <div className="w-full flex gap-3 flex-col">
                  <span className="description3 text-tertiary">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="(000) 000-0000"
                    className="border w-full border-gray-300 rounded-md p-2 no-spinner"
                  />
                  <span className="description3 text-tertiary">
                    Please enter a valid phone number
                  </span>
                </div>
              </div>
              {/* Address */}
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Address</label>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    name="address1"
                    onChange={handleChange}
                    value={formData.address1}
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    street address
                  </span>
                </div>
                {/* street address line 2 */}
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    name="address2"
                    onChange={handleChange}
                    value={formData.address2}
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    street address line 2
                  </span>
                </div>
                {/* city */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="city"
                      onChange={handleChange}
                      value={formData.city}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">city</span>
                  </div>
                  {/* state */}
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      name="state"
                      onChange={handleChange}
                      value={formData.state}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      State / Province
                    </span>
                  </div>
                </div>
                {/* postal code */}
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    name="zipCode"
                    onChange={handleChange}
                    value={formData.zipCode}
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    Postal / Zip Code
                  </span>
                </div>
              </div>

              {/* Item 1 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-primary uppercase description1 font-medium">
                  Item 1
                </h2>

                <div className="w-full h-px bg-gray-300"></div>

                <div ref={dropDown1} className="relative w-full max-w-[21rem]">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full py-3 px-4 border border-gray-300 bg-white text-left flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.product1 || "Please select"}
                    </span>

                    <MdArrowDropDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-300 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 py-2 border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm1}
                        onChange={(e) => setSearchTerm1(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                      />
                    </div>

                    <div className="max-h-48 overflow-y-auto">
                      {filteredItems1.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              product1: item,
                            }));

                            setIsOpen(false);
                            setSearchTerm1("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            formData.product1 === item ? "bg-blue-100" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="quantity1">Quantity</label>

                    <input
                      type="text"
                      name="quantity1"
                      value={formData.quantity1}
                      onChange={handleChange}
                      placeholder="e.g.23"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-primary uppercase description1 font-medium">
                  Item 2
                </h2>

                <div className="w-full h-px bg-gray-300"></div>

                <div ref={dropDown2} className="relative w-full max-w-[21rem]">
                  <button
                    type="button"
                    onClick={() => setIsOpen1(!isOpen1)}
                    className="w-full py-3 px-4 border border-gray-300 bg-white text-left flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.product2 || "Please select"}
                    </span>

                    <MdArrowDropDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isOpen1 ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-300 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen1 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 py-2 border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm2}
                        onChange={(e) => setSearchTerm2(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                      />
                    </div>

                    <div className="max-h-48 overflow-y-auto">
                      {filteredItems2.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              product2: item,
                            }));

                            setIsOpen1(false);
                            setSearchTerm2("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            formData.product2 === item ? "bg-blue-100" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="quantity2">Quantity</label>

                    <input
                      type="text"
                      name="quantity2"
                      value={formData.quantity2}
                      onChange={handleChange}
                      placeholder="e.g.23"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-primary uppercase description1 font-medium">
                  Item 3
                </h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div ref={dropDown3} className="relative w-full max-w-[21rem]">
                  <button
                    type="button"
                    onClick={() => setIsOpen2(!isOpen2)}
                    className="w-full py-3 px-4 border border-gray-300 bg-white text-left flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.product3 || "Please select"}
                    </span>
                    <MdArrowDropDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isOpen2 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-300 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen2 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 py-2 border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm3}
                        onChange={(e) => setSearchTerm3(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredItems3.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              product3: item,
                            }));
                            setIsOpen2(false);
                            setSearchTerm3("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            formData.product3 === item ? "bg-blue-100" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g.23"
                      name="quantity3"
                      value={formData.quantity3}
                      onChange={handleChange}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-primary uppercase description1 font-medium">
                  Item 4
                </h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div ref={dropDown4} className="relative w-full max-w-[21rem]">
                  <button
                    type="button"
                    onClick={() => setIsOpen3(!isOpen3)}
                    className="w-full py-3 px-4 border border-gray-300 bg-white text-left flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.product4 || "Please select"}
                    </span>
                    <MdArrowDropDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isOpen3 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-300 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen3 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 py-2 border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm4}
                        onChange={(e) => setSearchTerm4(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredItems4.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prevData) => ({
                              ...prevData,
                              product4: item,
                            }));
                            setIsOpen3(false);
                            setSearchTerm4("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            formData.product4 === item ? "bg-blue-100" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g.23"
                      name="quantity4"
                      id="quantity4"
                      value={formData.quantity4}
                      onChange={handleChange}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col gap-4">
                <h2 className="text-primary uppercase description1 font-medium">
                  Item 5
                </h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div ref={dropDown5} className="relative w-full max-w-[21rem]">
                  <button
                    type="button"
                    onClick={() => setIsOpen4(!isOpen4)}
                    className="w-full py-3 px-4 border border-gray-300 bg-white text-left flex items-center justify-between"
                  >
                    <span className="text-gray-500">
                      {formData.product5 || "Please select"}
                    </span>
                    <MdArrowDropDown
                      className={`w-6 h-6 text-gray-500 transition-transform ${
                        isOpen4 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`absolute top-full left-0 right-0 bg-white shadow-lg border border-gray-300 z-10 transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen4 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-3 py-2 border-b border-gray-300">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm5}
                        onChange={(e) => setSearchTerm5(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
                      />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredItems5.map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setFormData((prevData) => ({
                              ...prevData,
                              product5: item,
                            }));
                            setIsOpen4(false);
                            setSearchTerm5("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            formData.product5 === item ? "bg-blue-100" : ""
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g.23"
                      name="quantity5"
                      id="quantity5"
                      value={formData.quantity5}
                      onChange={handleChange}
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white py-2 w-fit px-12 border border-secondary hover:bg-secondary transition-colors duration-300 ease-in-out rounded-sm my-4 mx-auto disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
          {submitSuccess && (
            <p className="text-green-600 text-center pb-6">
              Quotation request submitted successfully!
            </p>
          )}
        </div>
      </div>
    </Section>
  );
};

export default CustomQuotationRequest;
