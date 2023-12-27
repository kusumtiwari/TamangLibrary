const DonationPage = () => {
  return (
    <div className="">
      <div className="bg-secondary-detailsBackground py-6 flex items-center justify-center flex-col">
        <h1 className="text-2xl md:text-3xl py-8 text-center">
          Mental health integration in Ramechhap district of Nepal.
        </h1>
        <h1 className="uppercase font-playfair text-3xl py-12">
          commitment form
        </h1>
        {/* contact form */}
        <div
          className="border-2 border-primary-blueText py-8 px-8 w-[80%] h-full bg-white"
          style={{ boxShadow: "0 0 10px 0 rgba(5, 23, 51, 0.2)" }}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[50%]">
              <h1 className="text-lg py-4">Enter your full name</h1>
              <input
                type="text"
                name="full-name"
                placeholder="Full name"
                className="px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
              />
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <h1 className="text-lg py-4">Enter your Address</h1>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="w-[100%] lg:w-[50%]">
              <h1 className="text-lg py-4">Enter your Phone Number</h1>
              <input
                type="number"
                name="phone-number"
                placeholder="Phone Number"
                className="px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
              />
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <h1 className="text-lg py-4">Enter your Email Address</h1>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
              />
            </div>
          </div>
          <div className="w-[100%] py-8">
            <h1 className="text-lg py-4">Messege</h1>
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="h-[20vh] px-4 border border-gray-400 w-[98%] rounded-md focus:border-primary-blueText focus:outline-none"
            />
          </div>
          <div className="w-[100%]">
            <h1 className="text-lg pb-4">Contribution Amount</h1>
            <input
              type="text"
              placeholder="Contribution"
              name="Contribution"
              className="w-[95%] px-4 py-3 border border-gray-400 rounded-md focus:border-primary-blueText focus:outline-none"
            />
          </div>
          <button className="border-2 border-primary-blueText text-primary-blueText font-semibold text-base px-3 py-2 rounded my-6 hover:text-white hover:bg-primary-blueText ease-in-out duration-300 transform">
            Donate now
          </button>
        </div>
      </div>
    </div>
  );
};
export default DonationPage;
