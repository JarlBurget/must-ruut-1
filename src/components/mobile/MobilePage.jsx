import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { useAppContext } from "../../context/AppContext";
import Separator from "../common/UI/Separator";
import MobileHeader from "./UI/MobileHeader";
import MobileFooter from "./UI/MobileFooter";
import ConcertDate from "../common/UI/ConcertDate";

const MobilePage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const heroRef = useRef(null);
  const concertsRef = useRef(null);
  const musicRef = useRef(null);
  const aboutRef = useRef(null);
  const membersRef = useRef(null);
  const location = useLocation();
  const { app } = useAppContext();

  useEffect(() => {
    switch (location.hash) {
      case "#hero":
        if (heroRef.current)
          heroRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#concerts":
        if (concertsRef.current)
          concertsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#music":
        if (musicRef.current)
          musicRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#about-us":
        if (aboutRef.current)
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#members":
        if (membersRef.current)
          membersRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "#contact-form":
        if (contactRef.current)
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [location]);

  // Toggle mute/unmute when video is clicked
  const handleClick = () => {
    setIsMuted(!isMuted); // Toggle mute state
  };
  const concerts = app.concerts;
  const about = app.about;

  return (
    <>
      <MobileHeader />
      <main>
        <section
          ref={heroRef}
          id="hero"
          className="bg-[url(/images/hero-2560.webp)] max-w-screen max-h-[1580px] min-h-[95vw] bg-cover bg-center"
          data-testid="hero-section"
        ></section>
        <Separator />
        <section
          ref={concertsRef}
          id="concerts"
          className="flex flex-col scroll-mt-32"
          data-testid="concerts-section"
        >
          <div className="w-full text-white">
            <h2 className="text-center mt-10 text-3xl">
              Tulevased kontserdid
            </h2>
            <div className="flex flex-col gap-6 p-4 sm:p-8">
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
          <div className="w-full">
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
          className="mx-10 scroll-mt-32 pb-8"
          data-testid="music-section"
        >
          <h2 className="text-white text-3xl p-4 text-center">Kuula mussi</h2>
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
          className="flex flex-col scroll-mt-32 items-center gap-10 px-10"
          data-testid="about-section"
        >
          <h2 className="text-3xl text-center w-full">Meist</h2>
          <div className="w-full flex justify-center items-center">
            <img src="images/logo_mr.JPG" alt="Bandi logo" />
          </div>
          <div className="w-full flex flex-col justify-center">
            {about.map((item, index) => (
              <p className="pt-10" key={index}>
                {item.paragraph}
              </p>
            ))}
          </div>
        </section>
        <Separator />
        <section></section>
        <Separator />
      </main>
      <MobileFooter />
    </>
  );
};
export default MobilePage;
