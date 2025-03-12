import DesktopHeader from "./UI/DesktopHeader"
import DesktopFooter from "./UI/DesktopFooter"
import ConcertDate from "./UI/ConcertDate";
import ContactForm from "./UI/ContactForm";
import Separator from "./UI/Separator";
import { useState, useRef, useEffect } from 'react';
import { useLocation } from "react-router";
import MemberCarousel from "./UI/MemberCarousel";

const DesktopPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef(null);
  const concertsRef = useRef(null);
  const musicRef = useRef(null);
  const aboutRef = useRef(null);
  const membersRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    switch (location.hash) {
      case '#hero':
        if (heroRef.current) heroRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#concerts':
        if (concertsRef.current) concertsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#music':
        if (musicRef.current) musicRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#about-us':
        if (aboutRef.current) aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#members':
        if (membersRef.current) membersRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case '#contact-form':
        if (contactRef.current) contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }, [location]);
  
  // Toggle mute/unmute when video is clicked
  const handleClick = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };
  const concerts = [
    { day: 15, month: 'Märts', year: 2025, title:'asdargsdhdfhjfgfhdfgfsddd' },
    { day: 22, month: 'March', year: 2025 },
    { day: 5, month: 'April', year: 2025 },
    // Add more concerts here
  ];

  return (
    <>
      <DesktopHeader />
      <main>
        <section
          ref={heroRef}
          id="hero"
          className="bg-[url(/images/hero-2560.webp)] max-w-screen h-screen max-h-[1580px] min-h-[900px] bg-cover bg-center"
          data-testid="hero-section"
        ></section>
        <Separator />
        <section
          ref={concertsRef}
          id="concerts"
          className="flex flex-row scroll-mt-32 lg:scroll-mt-46 xl:scroll-mt-50"
          data-testid="concerts-section"

        >
          <div className="w-2/5 lg:w-1/3 h-full text-white p-3">
            <h2 className="text-center mt-10 text-2xl lg:text-4xl">
              Tulevased kontserdid
            </h2>
            <div className="flex flex-col gap-6 p-8">
              {concerts.map((concert, index) => (
                <ConcertDate
                  key={index}
                  day={concert.day}
                  month={concert.month}
                  year={concert.year}
                  title={concert.title}
                />
              ))}
            </div>
          </div>
          <div className="w-3/5 lg:w-2/3 h-full">
            <video
              src="/videos/Luftaken.mp4"
              type="video/mp4"
              className="w-full h-auto rounded-xl shadow-lg p-8"
              autoPlay
              loop
              muted={isMuted} // Apply the mute state dynamically
              onClick={handleClick} // Toggle mute on click
              style={{ cursor: "pointer" }}
            ></video>
          </div>
        </section>
        <Separator />
        <section
          ref={musicRef}
          id="music"
          className="mx-20 lg:mx-40 xl:mx-80 scroll-mt-32 lg:scroll-mt-46 xl:scroll-mt-50 pb-8"
          data-testid="music-section"
        >
          <h2 className="text-white text-2xl p-4 text-center">Kuula mussi</h2>
          <div>
            <iframe
              title="Spotify iframe"
              className="rounded-[12px]"
              src="https://open.spotify.com/embed/artist/4YCL2HISYkUON4kUpWnt06?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </section>
        <Separator />
        <section
          ref={aboutRef}
          id="about-us"
          className="flex flex-row scroll-mt-32 lg:scroll-mt-46 xl:scroll-mt-50 items-center gap-20 px-20"
          data-testid="about-section"
        >
          <div className="w-2/3 lg:w-1/2 h-full flex flex-col justify-center">
            <h2 className="ml-4 lg:ml-7 xl:ml-10  lg:text-4xl">
              Meist
            </h2>
            <p className="ml-4 lg:ml-7 xl:ml-10  lg:text-2xl pt-15">
              Must Ruut on alternatiivroki bänd, mille muusika on segu mitmest
              erinevast stiilist. Sõltuvalt vaatenurgast võib meie lugudes
              tajuda nii folgi hingestatust, funki mängulisust kui ka pungi
              energiat. Meie looming on inspireeritud elust ja selle
              varjukülgedest – aus ja emotsionaalne.
              <br />
              <br />
              Me ei karda eksperimenteerida, viies kuulajad rännakule, kus
              meloodiad ja sõnad räägivad lugusid, mis jäävad kauaks meelde.{" "}
            </p>
          </div>
          <div className="w-1/3 lg:w-1/2 h-full flex justify-center items-center">
            <img src="images/logo_mr.JPG" alt="Bandi logo" />
          </div>
        </section>
        <Separator />
        <section
          ref={membersRef}
          id="members"
          className="flex flex-row scroll-mt-32 lg:scroll-mt-46 xl:scroll-mt-50"
          
        >
          <MemberCarousel/>
        </section>
        <Separator />
        <section
          ref={contactRef}
          id="contact-form"
          className="flex flex-row scroll-mt-32 lg:scroll-mt-46 xl:scroll-mt-50"
          data-testid="contact-section"
        >
          <div className="w-1/2 h-full flex flex-col justify-center items-center bg-red-500">

          </div>
          <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <ContactForm />
          </div>
        </section>
        <Separator />
      </main>
      <DesktopFooter />
    </>
  );
}
export default DesktopPage