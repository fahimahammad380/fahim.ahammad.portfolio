import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div id="contact" className="dark:bg-black bg-gray-50 py-10">
      <div className="w-2/3 mx-auto py-20 flex items-center gap-14">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl font-bold dark:text-white text-gray-700">
            Hire Me.
          </h1>
          <p className="text-gray-500 my-5">
            I am available for remote job. Connect with me via phone:{" "}
            <span className="dark:text-white text-rose-500">
              +88 01309773673
            </span>{" "}
            or email:{" "}
            <span className="dark:text-white text-rose-500">
              writetofahimahammad@gmail.com
            </span>
          </p>

          <form className="flex flex-col">
            <input
              type="text"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Name *"
              name="name"
              required
            />
            <input
              type="email"
              name="userEmail"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Email *"
              required
            />
            <input
              type="text"
              name="subject"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              className="dark:bg-[#191919] bg-gray-50 my-3 p-3 rounded dark:text-white text-gray-700 focus-within:outline-none border-2 border-slate-700"
              placeholder="Your Message"
              cols="30"
              rows="5"
              required
            ></textarea>
            <button className="text-white border-2 border-rose-600 bg-rose-600 py-3 px-9 cursor-pointer rounded-md mt-3 hover:bg-transparent hover:-translate-y-2 hover:text-rose-600 duration-500 ">
              <FontAwesomeIcon className="mr-2" icon={faPaperPlane} /> Send
            </button>
          </form>

          {/* 
          hello
          <div className="dark:text-white text-gray-700 text-center p-5 bg-gray-700 rounded-md">
            <FontAwesomeIcon
              className="p-2 bg-green-500 rounded-full"
              icon={faCheck}
            />
            <h1 className="text-xl font-bold text-green-500">
              Message send successful
            </h1>
            <h1 className="dark:text-white text-white">
              Thank you for message
            </h1>
          </div> */}
        </div>
        <div className="w-full md:w-1/2">
          <img src="about-8.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
