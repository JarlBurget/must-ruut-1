import { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3b54c16f-0b8c-4f63-8d31-1468019f203c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
      <h2 className="text-2xl lg:text-4xl pb-4">Võta meiega ühendust!</h2>
      <form
        className="flex flex-col items-center justify-center w-full gap-6"
        onSubmit={onSubmit}
      >
        <input
          className="bg-gray-300 rounded-xl text-2xl py-4 w-3/4 px-6 text-black"
          type="text"
          name="name"
          placeholder="Nimi"
          required
        />
        <input
          className="bg-gray-300 rounded-xl text-2xl py-4 w-3/4 px-6 text-black"
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          className="bg-gray-300 rounded-xl text-2xl py-4 w-3/4 px-6 text-black"
          type="text"
          name="subject"
          placeholder="Teema"
          required
        />
        <textarea
          className="bg-gray-300 rounded-xl text-2xl py-4 w-3/4 px-6 text-black"
          name="message"
          placeholder="Sõnum"
          required
        ></textarea>
        <button
          className="bg-gray-300 rounded-xl text-2xl py-4 px-6 text-black cursor-pointer transition duration-300 hover:brightness-75  "
          type="submit"
        >
          Submit Form
        </button>
      </form>
      <span>{result}</span>
    </div>
  );
};
export default ContactForm;
