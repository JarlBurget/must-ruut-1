import { Link } from "react-router"

const DesktopFooter = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex flex-row items-center left-0 top-8 pointer-events-none">
            <Link to="/#hero" className="pointer-events-auto"><img className="w-[65px] lg:w-[95px] xl:w-[140px] drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out" src="/images/ruut.webp" alt="Must ruut"/></Link>
          </div>
          <div class="text-left "> 
            <h4 class="text-lg text-white font-medium mb-7">Menüü</h4>
            <Link to="/#concerts"><div className="basis-3/7 flex-none">Kontserdid</div></Link>
            <Link to="/#music"><div className="basis-3/7 flex-none">Muusika</div></Link>
            <Link to="/#about-us"><div className="basis-1/3 flex-none">Meist</div></Link>
            <Link to="/#contact-form"><div className="basis-1/3 flex-none">Kontakt</div></Link>
            <Link to="/demos"><div className="basis-1/3 flex-none">Demod</div></Link>
          </div>

          <div className="flex flex-nowrap items-center">
            <div className="flex flex-col items-center mr-4"> {/* First icon-text pair */}
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="white" strokeLinecap="round" strokeWidth="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>
              <h4 className="text-lg text-white font-medium ml-2 mt-4">test@gmail.com</h4>
            </div>
            <div className="flex flex-col items-center"> {/* Second icon-text pair */}
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
              </svg>
              <h4 className="text-lg text-white font-medium ml-2 mt-4">5555 5555</h4>
            </div>
          </div>

          <div>
            <h4 className="text-lg text-white font-medium mb-7 text-center">Jälgi meid</h4>
            <div className="flex flex-col items-center">
              <div className="flex space-x-6 mb-4">
              <Link to="https://soundcloud.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/Soundcloud.svg"
                  alt="Soundcloud"
                  className="w-10 h-10"
                />
              </Link>
              <Link to="https://spotify.com/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Spotify.svg" alt="Spotify" className="w-10 h-10"
                />
                </Link>
              </div>
              <div className="flex space-x-6">
              <Link to="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Instagram.svg" alt="Instagram" className="w-10 h-10"
                />
                </Link>
                <Link to="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Facebook.svg" alt="Facebook" className="w-10 h-10"
                />
                </Link>
                <Link to="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <img
                src="/images/Youtube.svg" alt="Youtube" className="w-10 h-10"
                />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
    
  )
}
export default DesktopFooter
