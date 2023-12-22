const ContactForm: React.FC = () => {
  return (
    <div className="my-24 px-12 py-12 flex flex-col justify-between items-center bg-secondary-detailsBackground">
      <h1 className="uppercase font-playfair font-thin text-3xl lg:text-5xl pb-12">
        Contact us
      </h1>
      <div className="w-[90%] md:w-[70%] lg:w-[60%] my-4">
        <input
          type="text"
          name="name"
          className="px-4 py-4 w-full border-2 border-primary-blueText rounded-lg focus:outline-primary-blueText"
          placeholder="Name"
        />
      </div>
      <div className=" w-[90%] md:w-[70%] lg:w-[60%] my-4">
        <input
          type="email"
          name="email"
          className="px-4 py-4 w-full border-2 border-primary-blueText rounded-lg focus:outline-primary-blueText"
          placeholder="Email"
        />
      </div>
      <div className=" w-[90%] md:w-[70%] lg:w-[60%] my-4">
        <input
          type="number"
          name="phone"
          className="px-4 py-4 w-full border-2 border-primary-blueText rounded-lg focus:outline-primary-blueText"
          placeholder="Phone"
        />
      </div>
      <div className=" w-[90%] md:w-[70%] lg:w-[60%] my-4 ">
        <input
          type="text"
          name="message"
          className="px-4 py-4 w-full border-2 border-primary-blueText rounded-lg focus:outline-primary-blueText h-[15vh]"
          placeholder="Messege"
        />
      </div>
      <button className="border-2 border-primary-blueText px-6 py-2 rounded-lg my-4 text-primary-blueText text-2xl font-kameron bg-white hover:text-white hover:bg-primary-blueText transition ease-in-out duration-200">
        Send
      </button>
    </div>
  );
};

export default ContactForm;
