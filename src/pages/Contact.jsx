import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <Navbar />
      <section className="bg-gray-50">
        <section className="flex flex-col items-center">
          <h1 className="text-3xl mb-2 text-black mt-14">
            Contact ConsoleMart
          </h1>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            At ConsoleMart, we're always ready to assist our customers. Whether
            you want to make an enquiry, report an issue, or share your feedback
            - we'd love to hear from you. Let's connect and make your gaming
            experience even better.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">Get in Touch with Us</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            Our customer service team is available to answer your questions
            about consoles, accessories, orders, or deliveries. You can contact
            us through the following channels:
          </p>

          <ul className="grid gap-1 shadow-gray-300 shadow-md p-5 mt-3">
            <li className="flex flex-col items-center p-1">
              <strong>Email:</strong> support@consolemart.com
            </li>
            <li className="flex flex-col items-center p-1">
              <strong>Phone:</strong> +234 800 123 4567
            </li>
            <li className="flex flex-col items-center p-1">
              <strong>WhatsApp:</strong> +234 901 234 5678
            </li>
            <li className="flex flex-col items-center p-1">
              <strong>Office Address:</strong> 24 Tech Avenue, Mile 50,
              Abakaliki, Ebonyi State, Nigeria
            </li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">Customer Support Hours</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            We aim to respond to all enquires as fast as possible
          </p>
          <ul className="grid gap-1 shadow-gray-200 shadow-sm p-5 mt-3">
            <li className="bg-green-400 font-semibold mb-1 px-2">
              Monday - Friday: 8:00AM - 6:00PM
            </li>
            <li className="bg-green-400 font-semibold mb-1 px-2">
              Saturday: 9:00AM - 4:00PM
            </li>
            <li className="bg-red-400 font-semibold px-2">Sunday: Closed</li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">Send Us a Message</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            If you'd like to contact us directly, fill out the form below. Our
            team will reach out within 24 hours. Please provide accurate details
            so we can respond efficiently
          </p>

          <form
            onSubmit={handleSubmit}
            action="form/api/contact-us"
            className="border border-black p-5 flex justify-center items-center flex-1 flex-col bg-gray-100"
          >
            <div className="flex flex-col mb-2">
              <label className="text-sm">Full Name: </label>
              <input
                type="text"
                name="name"
                className="border border-black py-1 px-3 outline-none pl-2"
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-sm">Email: </label>
              <input
                type="text"
                name="email"
                className="border border-black py-1 px-3 outline-none pl-2 text-base"
              />
            </div>

            <div className="flex flex-col mb-2">
              <label className="text-sm">Message: </label>
              <textarea
                name="message"
                rows={3}
                className="border border-black py-1 px-3 outline-none pl-2 max-w-full"
              ></textarea>
            </div>

            <button
              type="submit"
              className="border border-black py-1 px-2 font-semibold hover:text-white hover:bg-green-800 transition"
            >
              Submit Message
            </button>
          </form>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">Connect on Social Media</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            Join our gaming community online and never miss out on console
            deals, product updates, or giveaways. Follow ConsoleMart on your
            favorite platforms:
          </p>

          <ul className="font-semibold">
            <li>Facebook: @ConsoleMart</li>
            <li>Instagram: @ConsoleMart.ng</li>
            <li>Twiiter: @ConsoleMartHQ</li>
          </ul>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">Locate Our Store</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            Perfer a face-to-face experience? Visit our store or pickup center
            in Abakaliki. You can find us using the map below or through your
            preferred navigation app.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h2 className="text-2xl mb-2">We Value Your Feedback</h2>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-2">
            Your opinion matters to us. ConsoleMart continues to grow by
            listening to our customers. if you have suggestions or ideas for
            improving our services, we'd love to hear from you.
          </p>
        </section>

        <section className="flex flex-col items-center mt-14">
          <h3 className="text-2xl mb-2">Thank You Message</h3>
          <p className="w-[90%] md:w-3/4 text-lg text-center mb-10">
            Thank you for choosing ConsoleMart - where gaming meets quality,
            affordablitiy, and execeptional customer support.
          </p>
        </section>
      </section>
      <Footer />
    </>
  );
}
