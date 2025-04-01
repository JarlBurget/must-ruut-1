import { useAppContext } from "../../../context/AppContext";
import { useState, useEffect } from "react";

const MobileHeader = () => {
  const openIcon = () => {
    return (
      <svg
        className="absolute w-[30%] h-[30%] sm:w-[25%] md:w-[20%] md:h-[20%] transition-transform duration-300 ease-in-out"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M.207 15.598V13.08l15.191.003v2.518zM.206 9.303V6.785l15.19.003.001 2.518zM.205 3.008V.49l15.19.004.001 2.517z"
          fill="url(#a)"
        />
        <defs>
          <linearGradient
            id="a"
            x1={7.8}
            y1={0.492}
            x2={7.796}
            y2={15.6}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF1324" />
            <stop offset={0.505} stopColor="#FF1324" />
            <stop offset={1} stopColor="#990B16" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  const closedIcon = () => {
    return (
      <svg
        className="absolute w-[30%] h-[30%] sm:w-[25%] md:w-[20%] md:h-[20%] transition-transform duration-300 ease-in-out"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.4 14 0 12.6 5.6 7 0 1.4 1.4 0 7 5.6 12.6 0 14 1.4 8.4 7l5.6 5.6-1.4 1.4L7 8.4z"
          fill="url(#a)"
        />
        <defs>
          <linearGradient
            id="a"
            x1={7}
            y1={0}
            x2={7}
            y2={14}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF1324" />
            <stop offset={1} stopColor="#990B16" />
          </linearGradient>
        </defs>
      </svg>
    )
  }

  const { app, dispatch } = useAppContext();
  const [squareRotation, setSquareRotation] = useState(app.modalVisible ? "" : "rotate-45");
  const [menuIcon, setMenuIcon] = useState(app.modalVisible ? closedIcon() : openIcon());

  useEffect(() => {
    setSquareRotation(app.modalVisible ? "" : "rotate-45");
    setMenuIcon(app.modalVisible ? closedIcon() : openIcon()); 
  }, [app.modalVisible]); 

  const handleClick = () => {
    dispatch({ type: "switchModal", payload: !app.modalVisible });
  };

 
  return (
    <header className="fixed top-0 z-50 right-0 pt-6 pr-6">
      <div className="relative flex items-center justify-center w-[15vw] h-[15vw] sm:w-[10vh] sm:h-[10vw] md:w-[8vw] md:h-[8vw]" onClick={handleClick}>
        <svg
          className={`w-[60px] drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out ${squareRotation}`}
          viewBox="0 0 180 180"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{
              fill: "#000",
              stroke: "#000",
              strokeWidth: 20.9293,
              paintOrder: "stroke markers fill",
            }}
            d="M10.465 10.465h159.071v159.071H10.465z"
          />
        </svg>
        {menuIcon}
      </div>
    </header>
  );
};
export default MobileHeader;
