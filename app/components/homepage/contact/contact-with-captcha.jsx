"use client";
// @flow strict
import { isValidEmail } from '@/utils/check-email';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

function ContactWithCaptcha() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState(null);
  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    console.log(1);
    
    e.preventDefault();
    console.log(2);
    if (!captcha) {
      console.log(3);
      toast.error('Please complete the captcha!');
      return;
    };

    console.log(4);
    if (!input.email || !input.message || !input.name) {
      console.log(5);
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      console.log(6);
      setError({ ...error, required: false });
      return;
    } else {
      console.log(7);
      setError({ ...error, required: false });
    };

    console.log(8);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    console.log(9);
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    console.log(10);
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      console.log(11);
      const userInput = {
        to_name: "Antoine",
        from_name: input.name.concat(" ( email : ".concat(input.email.concat(" )"))) ,
        message: input.message,
      }
      console.log("userinput : ", userInput)
      const res = await emailjs.send(serviceID, templateID, userInput, options);
      console.log(12);
      // const teleRes = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);

      console.log(13);
      if (res.status === 200) {
        console.log(14);
        toast.success('Message sent successfully!');
        setUserInput({
          name: '',
          email: '',
          message: '',
        });
        console.log(15);
        setCaptcha(null);
      };
    } catch (error) {
      console.log(16);
      console.log(error)
      toast.error(error?.text || error);
    };
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contactez moi
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {"Si vous avez des questions, n'hésitez pas à me contacter. Je suis ouvert à toute opportunité de travail correspondant à mes compétences et intérêts."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Votre Nom: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Votre Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email &&
              <p className="text-sm text-red-400">Veuillez entrer un email valide!</p>
            }
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Votre Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={input.message}
            />
          </div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={(code) => setCaptcha(code)}
            lang='fr'
          />
          <div className="flex flex-col items-center gap-2">
            {error.required &&
              <p className="text-sm text-red-400">
                Email et Message sont requis!
              </p>
            }
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
            >
              <span>Envoyer Message</span>
              <TbMailForward className="mt-1" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithCaptcha;