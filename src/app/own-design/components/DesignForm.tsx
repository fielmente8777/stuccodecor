import { Section } from "@/components";

const DesignForm = () => {
  return (
    <Section>
      <div className="">
        <div className="max-w-3xl mx-auto w-ful shadow-2xl rounded-sm">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-6 w-full p-8 border-b border-gray-300">
              <div className="flex flex-col gap-4">
                <label htmlFor="name">Name</label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      id="name"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                    <span className="description3 text-tertiary">
                      First Name
                    </span>
                  </div>
                  <div className="w-full flex gap-3 flex-col">
                    <input
                      type="text"
                      className="border w-full border-gray-300 rounded-sm p-2"
                    />
                    <span className="description3 text-tertiary">
                      Last Name
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="border w-full border-gray-300 rounded-sm p-2"
                  />
                  <span className="description3 text-tertiary">
                    example@example.com
                  </span>
                </div>
                <div className="w-full flex gap-3 flex-col">
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="number"
                    id="number"
                    //   placeholder="(000) 000-0000"
                    className="border w-full border-gray-300 rounded-sm p-2 no-spinner"
                  />
                  <span className="description3 text-tertiary">
                    Please enter a valid phone number
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-full flex gap-3 flex-col">
                    <label htmlFor="name">Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g.23"
                      className="border w-full border-gray-300 rounded-sm p-2"
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

export default DesignForm;
