import "boxicons/css/boxicons.min.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactComments from "./ContactComments";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yd2zm2",
        "template_gonybde",
        form.current,
        "5n_iM919J7H_z84Lk"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className="relative inline-block group ml-4 sm:ml-10 mt-10 mb-2"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">
          Contact Me
        </h2>
        <span className="pointer-events-none absolute left-0 bottom-0 h-[4px] w-full scale-x-0 origin-left bg-[#e99b63] transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
      </div>

      <div
        className="flex flex-col mt-5 mb-16 bg-neutral-900 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 rounded-lg shadow-lg"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h3
          className="text-lg sm:text-xl text-center tracking-wider mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Got a Question? Send me a message and I'll get back to you soon.
        </h3>

        <div className="w-full flex flex-col md:flex-row items-start gap-10 md:gap-16 lg:gap-24 mt-8 justify-between">
          <div
            className="bg-neutral-800 px-6 sm:px-8 md:px-10 pt-6 pb-12 rounded-2xl w-full shadow-[0_5px_30px_rgba(252,161,95,0.5)]"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#fca15f]">
                Get in Touch
              </h2>
              <i className="bx bx-share-alt text-3xl sm:text-4xl pt-3 text-[#fca15f] cursor-pointer hover:text-[#e99b63] transition"></i>
            </div>
            <p
              className="tracking-wider text-base sm:text-lg mb-5"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
            >
              Have something to discuss? Send me a message and let's talk.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div
                className="flex items-center border bg-neutral-700 rounded-md px-4 py-3 focus-within:border-[#fca15f] transition"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="800"
              >
                <i className="bx bx-user text-xl sm:text-2xl text-[#fca15f] mr-3"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:bg-transparent"
                />
              </div>

              <div
                className="flex items-center border border-gray-500 rounded-md px-4 py-3 bg-neutral-700 focus-within:border-[#fca15f] transition"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
              >
                <i className="bx bx-envelope text-xl sm:text-2xl text-[#fca15f] mr-3"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div
                className="flex border border-gray-500 rounded-md px-4 py-3 bg-neutral-700 focus-within:border-[#fca15f] transition"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="800"
              >
                <i className="bx bx-message-square-dots text-xl sm:text-2xl text-[#fca15f] mr-3 mt-1"></i>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="8"
                  required
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none pt-[3px]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                        w-full
                        text-black
                        rounded-md
                        h-12
                        font-semibold
                        bg-gradient-to-r from-[#fca15f] to-[#e6733f]
                        hover:from-[#e6733f] hover:to-[#fca15f]
                        hover:shadow-[0_0_15px_rgba(252,161,95,0.7)]
                        active:scale-95
                        active:ring
                        active:ring-[#fca15f]
                        active:ring-offset-2
                        transition-all
                        duration-300
                        flex
                                          items-center
                        justify-center
                        gap-2
                      "
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
              >
                <i className="bx bxs-send"></i> Send Message
              </button>
            </form>

            <div
              className="bg-neutral-700 p-4 sm:p-6 rounded-lg shadow-md mt-16"
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-duration="800"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fca15f] mb-6">
                Connect With Me
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="https://www.linkedin.com/in/omshende/"
                  target="_blank"
                  className="flex lg:col-span-2 items-center bg-neutral-600 rounded-xl px-2 py-3 hover:bg-[#fca15f] hover:text-black transition gap-2"
                >
                  <img
                    src="/linkedin.svg"
                    alt="LinkedIn logo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col gap-0 leading-none">
                    <span className="text-xl font-bold tracking-wider">
                      Lets Connect
                    </span>
                    <span className="text-sm">on LinkedIN</span>
                  </div>
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="https://github.com/omshende77?tab=repositories"
                  target="_blank"
                  className="flex items-center bg-neutral-600 rounded-xl px-2 py-3 hover:bg-[#fca15f] hover:text-black transition gap-2"
                >
                  <img
                    src="/github.svg"
                    alt="Github logo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col gap-0 leading-none">
                    <span className="text-xl font-bold tracking-wider">
                      Github
                    </span>
                    <span className="text-sm">omshende77</span>
                  </div>
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center bg-neutral-600 rounded-xl px-2 py-3 hover:bg-[#fca15f] hover:text-black transition gap-2"
                >
                  <img
                    src="/instagram.svg"
                    alt="Instagram logo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col gap-0 leading-none">
                    <span className="text-xl font-bold tracking-wider">
                      Instagram
                    </span>
                    <span className="text-sm">@om_shende_x</span>
                  </div>
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="mailto:omshende1085@gmail.com"
                  target="_blank"
                  className="flex items-center bg-neutral-600 rounded-xl px-2 py-3 hover:bg-[#fca15f] hover:text-black transition gap-2"
                >
                  <img
                    src="/gmail.svg"
                    alt="Gmail logo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col gap-0 leading-none">
                    <span className="text-xl font-bold tracking-wider">
                      Gmail
                    </span>
                    <span className="text-sm">om shende</span>
                  </div>
                </a>
                <a
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  href="https://x.com/home"
                  target="_blank"
                  className="flex items-center bg-neutral-600 rounded-xl px-2 py-3 hover:bg-[#fca15f] hover:text-black transition gap-2"
                >
                  <img
                    src="/twi.svg"
                    alt="Twitter logo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col gap-0 leading-none">
                    <span className="text-xl font-bold tracking-wider">
                      Twitter
                    </span>
                    <span className="text-sm">@om_shende_x</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/*right section*/}
          <ContactComments />
        </div>
      </div>
    </>
  );
};

export default Contact;
