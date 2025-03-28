import { MainHeading, Section } from "@/components";

const CustomQuotationRequest = () => {
  return (
    <Section>
      <div className="max-w-5xl mx-auto w-full px-4">
        <MainHeading
          h2
          title="Custom Quotation Request"
          className="font-bold manrope !text-primary capitalize mb-8"
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
                    <span className="description3 text-tertiary">First Name</span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-md p-2"
                    />
                    <span className="description3 text-tertiary">Last Name</span>
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
                  <span className="description3 text-tertiary">example@example.com</span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <span className="description3 text-tertiary">Phone Number</span>
                  <input
                    type="number"
                    placeholder="(000) 000-0000"
                    className="border w-full border-gray-300 rounded-md p-2 no-spinner"
                  />
                  <span className="description3 text-tertiary">Please enter a valid phone number</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Address</label>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">street address</span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">street address line 2</span>
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
                    <span className="description3 text-tertiary">State / Province</span>
                  </div>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded-md p-2"
                  />
                  <span className="description3 text-tertiary">Postal / Zip Code</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2>Item 1</h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="">select item</div>
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
              <div className="flex flex-col gap-4">
                <h2>Item 2</h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="">select item</div>
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
              <div className="flex flex-col gap-4">
                <h2>Item 2</h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="">select item</div>
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
              <div className="flex flex-col gap-4">
                <h2>Item 3</h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="">select item</div>
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
              <div className="flex flex-col gap-4">
                <h2>Item 4</h2>
                <div className="w-full h-px bg-gray-300"></div>
                <div className="">select item</div>
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
