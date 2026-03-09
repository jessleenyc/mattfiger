import React from 'react';
import { getOptimizedImage } from '../imageUtils';

const About: React.FC = () => {
  return (
    <div className="px-6 py-20 max-w-5xl mx-auto">
      <h1 className="text-4xl tracking-normal mb-16 text-black font-bold uppercase text-center">ABOUT</h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
        <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
          <div className="bg-neutral-100 overflow-hidden shadow-sm w-full max-w-[400px]">
            <img
              src={getOptimizedImage("mfnew.jpg", 1200)}
              alt="Matthew Figler Profile"
              className="w-full h-auto opacity-100 block"
            />
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-start">
          <div className="text-black/70 space-y-8 text-lg md:text-xl leading-relaxed font-light">
            <p>
              <strong className="font-bold text-black">Matthew Figler is a cinematographer based in the Finger Lakes and NYC</strong>, specializing in human-centered storytelling across a wide range of production flavors.
            </p>
            <p>
              From global brand campaigns to intimate documentaries, he brings a sensitive eye and a commitment to <strong className="font-bold text-black">capturing stories in their most honest light—or shadow.</strong>
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-black/10">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-6 font-bold">SERVICES</h3>
              <ul className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-black/60 font-medium tracking-widest">
                <li>CINEMATOGRAPHER</li>
                <li>CAMERA OPERATOR</li>
                <li>2ND UNIT DP</li>
                <li>DIGITAL CINEMA CAMERA SYSTEMS</li>
                <li className="sm:col-span-2">ANALOG 16MM & 35MM FILM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
