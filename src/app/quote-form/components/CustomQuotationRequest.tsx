"use client";
import { MainHeading, Section } from "@/components";
import { exteriorProductspageData } from "@/data/pageData";
import useClickOutside from "@/hooks/useClickOutside";
import { useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

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
  
  // Separate state for each item's selected product
  const [productItem1, setProductItem1] = useState("");
  const [productItem2, setProductItem2] = useState("");
  const [productItem3, setProductItem3] = useState("");
  const [productItem4, setProductItem4] = useState("");
  const [productItem5, setProductItem5] = useState("");
  
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

  useClickOutside(dropDown1, () => {if (isOpen) setIsOpen(false)});
  useClickOutside(dropDown2, () => {if (isOpen1) setIsOpen1(false)});
  useClickOutside(dropDown3, () => {if (isOpen2) setIsOpen2(false)});
  useClickOutside(dropDown4, () => {if (isOpen3) setIsOpen3(false)});
  useClickOutside(dropDown5, () => {if (isOpen4) setIsOpen4(false)});

  // Filter functions for each dropdown
  const filteredItems1 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm1.toLowerCase())
  );
  const filteredItems2 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm2.toLowerCase())
  );
  const filteredItems3 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm3.toLowerCase())
  );
  const filteredItems4 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm4.toLowerCase())
  );
  const filteredItems5 = items.filter((item) =>
    item.toLowerCase().includes(searchTerm5.toLowerCase())
  );

  return (
    <Section>
      <div className="max-w-5xl mx-auto w-full px-4">
        <MainHeading
          h2
          title="Custom Quotation Request"
          className="font-bold manrope !text-primary capitalize mb-8 mediumHeading"
        />
        <div className="max-w-3xl mx-auto w-ful shadow-2xl rounded-sm">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 p-8 w-full border-b border-gray-300">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      First Name
                    </span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex gap-3 flex-col">
                  <span className="description3 text-tertiary">Email</span>
                  <input
                    type="email"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    example@example.com
                  </span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <span className="description3 text-tertiary">
                    Phone Number
                  </span>
                  <input
                    type="number"
                    placeholder="(000) 000-0000"
                    className="border w-full border-gray-300 rounded-md p-2 no-spinner"
                  />
                  <span className="description3 text-tertiary">
                    Please enter a valid phone number
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Address</label>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    street address
                  </span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">
                    street address line 2
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">city</span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">
                      State / Province
                    </span>
                  </div>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
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
                      {productItem1 || "Please select"}
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
                            setProductItem1(item);
                            setIsOpen(false);
                            setSearchTerm1("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            productItem1 === item ? "bg-blue-100" : ""
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
                      {productItem2 || "Please select"}
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
                            setProductItem2(item);
                            setIsOpen1(false);
                            setSearchTerm2("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            productItem2 === item ? "bg-blue-100" : ""
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
                      {productItem3 || "Please select"}
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
                            setProductItem3(item);
                            setIsOpen2(false);
                            setSearchTerm3("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            productItem3 === item ? "bg-blue-100" : ""
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
                      {productItem4 || "Please select"}
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
                            setProductItem4(item);
                            setIsOpen3(false);
                            setSearchTerm4("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            productItem4 === item ? "bg-blue-100" : ""
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
                      {productItem5 || "Please select"}
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
                            setProductItem5(item);
                            setIsOpen4(false);
                            setSearchTerm5("");
                          }}
                          className={`w-full px-4 py-2 text-left text-sm font-medium uppercase hover:bg-blue-100 transition ${
                            productItem5 === item ? "bg-blue-100" : ""
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
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-primary text-white py-2 w-fit px-12 border border-secondary hover:bg-secondary transition-colors duration-300 ease-in-out rounded-sm my-4 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default CustomQuotationRequest;