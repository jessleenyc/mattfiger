
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="px-6 py-20 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl tracking-tighter mb-12 text-black font-bold uppercase">GET IN TOUCH</h1>

      {submitted ? (
        <div className="bg-neutral-50 p-12 animate-in zoom-in duration-500 border border-black/5">
          <h2 className="text-2xl font-bold mb-4 text-black">MESSAGE SENT</h2>
          <p className="text-black/50">THANK YOU FOR REACHING OUT, MATTHEW WILL GET BACK TO YOU SHORTLY.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 text-[10px] uppercase tracking-widest hover:text-black transition underline text-black/50"
          >
            SEND ANOTHER
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12 text-left max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/30 ml-1 font-bold">Name</label>
              <input
                required
                type="text"
                className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black focus:outline-none transition text-xl font-light text-black placeholder:text-black/10"
                placeholder="YOUR NAME"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-black/30 ml-1 font-bold">Email</label>
              <input
                required
                type="email"
                className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black focus:outline-none transition text-xl font-light text-black placeholder:text-black/10"
                placeholder="YOUR@EMAIL.COM"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-black/30 ml-1 font-bold">Message</label>
            <textarea
              required
              rows={4}
              className="w-full bg-transparent border-b border-black/10 py-4 focus:border-black focus:outline-none transition text-xl font-light resize-none text-black placeholder:text-black/10"
              placeholder="TELL ME ABOUT YOUR PROJECT"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-6 mt-12 bg-black text-white text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-neutral-800 transition-colors shadow-lg"
          >
            SEND MESSAGE
          </button>
        </form>
      )}

      <div className="mt-20 flex flex-col items-center space-y-4">
        <p className="text-black/20 uppercase tracking-[0.3em] text-[10px] font-bold">DIRECT</p>
        <a href="mailto:mattfigler@gmail.com" className="text-2xl hover:text-black/50 transition font-bold">mattfigler@gmail.com</a>
        <div className="flex space-x-8 pt-10">
          <a href="https://www.instagram.com/matty_le_fig/?hl=en" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40 hover:text-black transition font-bold">Instagram</a>
          <a href="https://vimeo.com/figxlee" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40 hover:text-black transition font-bold">Vimeo</a>
          <a href="https://entertheglen.tumblr.com/" target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-black/40 hover:text-black transition font-bold">Tumblr</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
