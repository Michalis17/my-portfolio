import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';


interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
    const form = useRef<HTMLFormElement | null>(null);
    //Variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // State to manage form submission status and loading
    const [loading, setLoading] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        if (form.current !== null) {
            emailjs
                .sendForm(serviceID, templateID , form.current, {
                    publicKey: publicKey,
                })
                .then(
                    () => {
                        setLoading(false);
            setSuccessMessage('Message sent successfully!');
            setErrorMessage(null);
            form.current?.reset(); // Clear the form fields after successful submission
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        setLoading(false);
            setErrorMessage('Failed to send message. Please try again.');
                        console.log('FAILED...', error.text);
                    },
                );
        }

    };

    return (


<div className="max-w-md mx-auto bg-white/5 p-6 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>

      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      {errorMessage && <p className="text-red-600 mb-4">{errorMessage}</p>}

      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
            {/* name */}
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id='name'
            required
            className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
        </div>

        <div className="mb-4">
            {/* email */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id='email'
            required
            className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
        </div>

        <div className="mb-4">
            {/* message */}
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id='message'
            required
            className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
    );
};
export default ContactForm;
