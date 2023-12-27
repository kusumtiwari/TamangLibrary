const RegistrationForm: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-6 md:mx-12 my-12 py-8">
      <div className="w-[100%] lg:w-[45%] h-[100%] bg-secondary-detailsBackground px-8 py-8">
        <h1 className="text-primary-blueText font-semibold text-4xl text-center">
          Registration Form
        </h1>
        <div className="w-[100%]">
          <h1 className="text-lg py-4">Full name</h1>
          <input
            type="text"
            name="full-name"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-lg py-4">Phone Number</h1>
          <input
            type="text"
            name="phone-number"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-lg py-4">Affiliate Institute| Organization</h1>
          <input
            type="text"
            name="organization"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-lg py-4">Email</h1>
          <input
            type="text"
            name="organization"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-lg py-4">Phone Number</h1>
          <input
            type="text"
            name="phone-number"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none"
          />
        </div>

        <div className="w-[100%]">
          <h1 className="text-lg py-4">Messege</h1>
          <input
            type="text"
            name="Messege"
            className=" px-4 py-3 border border-gray-400 w-[95%] rounded-md focus:border-primary-blueText focus:outline-none h-[20vh]"
          />
        </div>
      </div>
      <div className="w-[100%] lg:w-[55%] flex flex-grow h-[60vh] lg:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8643541300366!2d85.35946007492358!3d27.72147412486922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBuddha%20Stupa!5e0!3m2!1sen!2snp!4v1703489547905!5m2!1sen!2snp"
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
export default RegistrationForm;
