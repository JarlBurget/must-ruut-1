import { Link } from "react-router";

const MobileFooter = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-row items-center p-8 pointer-events-none place-content-center">
            <Link to="/#hero" className="pointer-events-auto"><img className="w-[125px] lg:w-[95px] xl:w-[140px] drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out" src="/images/ruut.webp" alt="Must ruut"/></Link>
      </div>
      <div className="flex flex-col items-center">
            <div className="flex flex-col items-center "> {/* First icon-text pair */}
              <svg className="w-24 h-20 lg:w-12 lg:h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={() => window.location.href = "mailto:mustvalgeruut@gmail.com"} >
                <path stroke="white" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>
              <h4 className="text-lg text-white font-medium ml-2 mt-4">mustvalgeruut@gmail.com</h4>
            </div>
            <div className="flex flex-col items-center mt-6"> {/* Second icon-text pair */}
              <svg className="w-24 h-20 md:w-32 lg:w-60 lg:h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"  onClick={() => window.location.href = "tel:+37253312933"} >
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
              </svg>
              <h4 className="text-lg text-white font-medium ml-2 mt-4">+372 5331 2933</h4>
            </div>
          </div>

            <h4 className="text-lg text-white font-medium mb-7 text-[1.6rem] text-center pt-6 mt-6 ">Jälgi meid</h4>
            <div className="flex flex-col items-center mt-4 pb-6">
              <div className="flex space-x-6 mb-4">
              <Link to="https://soundcloud.com/must-ruut" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Soundcloud.svg"
                  alt="Soundcloud"
                  className="w-10 h-10 transition duration-300 hover:brightness-75 hover:saturate-200 hover:hue-rotate-[250deg]"
                  
                />
              </Link>
              <Link to="https://open.spotify.com/artist/4YCL2HISYkUON4kUpWnt06" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Spotify.svg" alt="Spotify" className="w-10 h-10 transition duration-300 hover:brightness-75 hover:saturate-200 hover:hue-rotate-[250deg]"
                />
                </Link>

              <div className="flex space-x-6">
              <Link to="https://www.instagram.com/must_ruut/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Instagram.svg" alt="Instagram" className="w-10 h-10 transition duration-300 hover:brightness-75 hover:saturate-200 hover:hue-rotate-[250deg]"
                />
                </Link>
                <Link to="https://www.facebook.com/MustRuutBand/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Facebook.svg" alt="Facebook" className="w-10 h-10 transition duration-300 hover:brightness-75 hover:saturate-200 hover:hue-rotate-[250deg]"
                />
                </Link>
                <Link to="https://www.youtube.com/channel/UCt_8Evw80tlWY6Im72PZh5A" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Youtube.svg" alt="Youtube" className="w-10 h-10 transition duration-300 hover:brightness-75 hover:saturate-200 hover:hue-rotate-[250deg]"
                />
                </Link>
              </div>
            </div>
          </div>

    </footer>
  );
};
export default MobileFooter;
