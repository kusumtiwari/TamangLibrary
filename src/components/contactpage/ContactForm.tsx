const ContactForm: React.FC = () => {
  return (
    <>
      <div className="my-24 py-12 xl:px-24 lg:px-16 md:px-16 flex flex-col justify-between items-center bg-secondary-detailsBackground">
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
      <div className="my-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8643541300285!2d85.35946007492358!3d27.72147412486922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bda4a951f0f%3A0x3ddabb234891c3bd!2sBuddha%20Stupa!5e0!3m2!1sen!2snp!4v1703411466028!5m2!1sen!2snp"
          allowFullScreen
          loading="lazy"
          style={{ width: "100%", height: "70vh" }}
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
