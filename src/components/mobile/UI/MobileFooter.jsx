import { Link } from "react-router";

const MobileFooter = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-row items-center p-8 pointer-events-none place-content-center">
        <Link to="/#hero" className="pointer-events-auto">
          <img
            className="w-[125px] lg:w-[95px] xl:w-[140px] drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out"
            src="/images/ruut.webp"
            alt="Must ruut"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center ">
          {" "}
          {/* First icon-text pair */}
          <svg
            className="w-24 h-20 lg:w-12 lg:h-12 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() =>
              (window.location.href = "mailto:mustvalgeruut@gmail.com")
            }
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeWidth="2"
              d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
            />
          </svg>
          <h4 className="text-lg text-white font-medium ml-2 mt-4">
            mustvalgeruut@gmail.com
          </h4>
        </div>
        <div className="flex flex-col items-center mt-6">
          {" "}
          {/* Second icon-text pair */}
          <svg
            className="w-24 h-20 md:w-32 lg:w-60 lg:h-12 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            onClick={() => (window.location.href = "tel:+37253312933")}
          >
            <path
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
            />
          </svg>
          <h4 className="text-lg text-white font-medium ml-2 mt-4">
            +372 5331 2933
          </h4>
        </div>
      </div>

      <h4 className="text-lg text-white font-medium mb-7 text-[1.6rem] text-center pt-6 mt-6 ">
        Jälgi meid
      </h4>
      <div className="flex flex-col items-center mt-4 pb-6">
        <div className="flex space-x-6 mb-4">
          <Link
            to="https://soundcloud.com/must-ruut"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={49}
              height={21}
              viewBox="0 0 49 21"
              fill="currentColor"
              className="w-10 h-10 transition duration-100 hover:text-red-700 active:text-red-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.52 2.622V21h19.51c4.121-.294 5.97-2.87 5.97-6.036 0-3.345-2.495-6.035-5.836-6.035-.846 0-1.559.18-2.294.497C40.337 4.136 35.905 0 30.447 0c-2.606 0-5.078.995-6.927 2.622m-1.96 2.306c-.668-.407-1.38-.723-2.16-.882V21h3.096V3.685c-.335.361-.646.813-.936 1.243m-5.234-1.22V21h2.049V3.775a8 8 0 0 0-1.292-.09c-.267 0-.512 0-.757.022M12.25 5.176V21h2.027V4.137a7.8 7.8 0 0 0-2.027 1.04m-3.72 5.65c-.133 0-.267-.135-.423-.203V21h2.05V7.12a8.8 8.8 0 0 0-1.627 3.708m-4.543-.632v10.602A5.7 5.7 0 0 0 5.568 21h.49V10.014a4 4 0 0 0-.49-.045c-.579 0-1.113.09-1.581.226M0 15.485c0 1.695.757 3.187 1.938 4.204v-8.386A5.47 5.47 0 0 0 0 15.484" />
            </svg>
          </Link>
          <Link
            to="https://open.spotify.com/artist/4YCL2HISYkUON4kUpWnt06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={45}
              height={44}
              viewBox="0 0 45 44"
              fill="currentColor"
              className="w-10 h-10 transition duration-300 hover:text-red-700 active:text-red-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M35.775 19.58c-7.2-4.18-19.237-4.62-26.1-2.53a2.12 2.12 0 0 1-2.588-1.32c-.337-1.1.338-2.2 1.35-2.53 7.988-2.31 21.15-1.87 29.476 2.97 1.012.55 1.35 1.87.787 2.86-.562.77-1.913 1.1-2.925.55m-.225 6.16c-.562.77-1.575 1.1-2.362.55-6.076-3.63-15.3-4.73-22.388-2.53-.9.22-1.913-.22-2.138-1.1s.225-1.87 1.125-2.09C18 18.15 28.126 19.36 35.1 23.54c.675.33 1.012 1.43.45 2.2m-2.7 6.05c-.45.66-1.238.88-1.913.44-5.287-3.19-11.925-3.85-19.8-2.09-.787.22-1.462-.33-1.687-.99-.225-.77.338-1.43 1.013-1.65 8.55-1.87 15.975-1.1 21.825 2.42.787.33.9 1.21.562 1.87M22.5 0c-2.955 0-5.88.569-8.61 1.675a22.5 22.5 0 0 0-7.3 4.769C2.37 10.57 0 16.165 0 22s2.37 11.43 6.59 15.556a22.5 22.5 0 0 0 7.3 4.77A23 23 0 0 0 22.5 44c5.967 0 11.69-2.318 15.91-6.444S45 27.835 45 22c0-2.89-.582-5.75-1.713-8.419a22 22 0 0 0-4.877-7.137 22.5 22.5 0 0 0-7.3-4.77A23 23 0 0 0 22.5 0" />
            </svg>
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link
            to="https://www.instagram.com/must_ruut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={53}
              height={53}
              viewBox="0 0 53 53"
              fill="currentColor"
              className="w-10 h-10 transition duration-300 hover:text-red-700 active:text-red-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.37 0h22.26C46.11 0 53 6.89 53 15.37v22.26A15.37 15.37 0 0 1 37.63 53H15.37C6.89 53 0 46.11 0 37.63V15.37A15.37 15.37 0 0 1 15.37 0m-.53 5.3a9.54 9.54 0 0 0-9.54 9.54v23.32a9.534 9.534 0 0 0 9.54 9.54h23.32a9.54 9.54 0 0 0 9.54-9.54V14.84a9.534 9.534 0 0 0-9.54-9.54zm25.573 3.975a3.313 3.313 0 1 1 0 6.625 3.313 3.313 0 0 1 0-6.625M26.5 13.25a13.25 13.25 0 1 1 0 26.5 13.25 13.25 0 0 1 0-26.5m0 5.3a7.95 7.95 0 1 0 0 15.9 7.95 7.95 0 0 0 0-15.9" />
            </svg>
          </Link>
          <Link
            to="https://www.facebook.com/MustRuutBand/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={43}
              height={43}
              viewBox="0 0 43 43"
              fill="currentColor"
              className="w-10 h-10 transition duration-300 hover:text-red-700 active:text-red-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M43 21.554C43 9.656 33.368 0 21.5 0S0 9.656 0 21.554c0 10.432 7.396 19.118 17.2 21.123V28.02h-4.3v-6.466h4.3v-5.389c0-4.16 3.376-7.543 7.525-7.543H30.1v6.466h-4.3c-1.183 0-2.15.97-2.15 2.155v4.31h6.45v6.467h-6.45V43C34.508 41.922 43 32.74 43 21.554" />
            </svg>
          </Link>
          <Link
            to="https://www.youtube.com/channel/UCt_8Evw80tlWY6Im72PZh5A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width={44}
              height={30}
              viewBox="0 0 44 30"
              fill="currentColor"
              className="w-10 h-10 transition duration-300 hover:text-red-700 active:text-red-700"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.6 21.429 29.018 15 17.6 8.571zM43.032 4.65c.286 1.007.484 2.357.616 4.071.154 1.715.22 3.193.22 4.479L44 15c0 4.693-.352 8.143-.968 10.35-.55 1.929-1.826 3.171-3.806 3.707-1.034.279-2.926.472-5.83.6-2.86.15-5.478.214-7.898.214L22 30c-9.218 0-14.96-.343-17.226-.943-1.98-.536-3.256-1.778-3.806-3.707-.286-1.007-.484-2.357-.616-4.071a50 50 0 0 1-.22-4.479L0 15c0-4.693.352-8.143.968-10.35.55-1.929 1.826-3.171 3.806-3.707C5.808.664 7.7.47 10.604.343c2.86-.15 5.478-.214 7.898-.214L22 0c9.218 0 14.96.343 17.226.943 1.98.536 3.256 1.778 3.806 3.707" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default MobileFooter;
