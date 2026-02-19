
import { getOptimizedImage } from '../imageUtils';

const About: React.FC = () => {
  return (
    <div className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl tracking-normal mb-12 text-black font-bold uppercase text-center">ABOUT</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="aspect-square bg-neutral-100 overflow-hidden shadow-sm">
          <img
            src={getOptimizedImage("mf2.jpg", 1200)}
            alt="Matthew Figler Profile"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        <div>
          <div className="text-black/70 space-y-6 text-lg leading-relaxed font-light">
            <p>
              <strong className="font-bold text-black">Matthew Figler is a cinematographer based in NYC and the Finger Lakes</strong>, specializing in human-centered storytelling across a wide range of production flavors.
            </p>
            <p>
              From global brand campaigns to intimate documentaries, he brings a sensitive eye and a commitment to <strong className="font-bold text-black">capturing stories in their most honest light—or shadow.</strong>
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-black/10 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-black/40 mb-2 font-bold">SERVICES</h3>
              <ul className="text-sm space-y-1 text-black/60">
                <li>CINEMATOGRAPHER</li>
                <li>CAMERA OPERATOR</li>
                <li>2ND UNIT DP</li>
                <li>16MM & 35MM FILM</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
