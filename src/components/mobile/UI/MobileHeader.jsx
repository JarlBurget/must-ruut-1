import { useAppContext } from "../../../context/AppContext";
import { useState, useEffect } from "react";

const MobileHeader = () => {
  const { app, dispatch } = useAppContext();
  const [squareRotation, setSquareRotation] = useState(app.modalVisible ? "" : "rotate-45");
  const [menuIcon, setMenuIcon] = useState(app.modalVisible ? "/images/menu_close.svg" : "/images/menu_open.svg");

  useEffect(() => {
    setSquareRotation(app.modalVisible ? "" : "rotate-45");
    setMenuIcon(app.modalVisible ? "/images/menu_close.svg" : "/images/menu_open.svg"); 
  }, [app.modalVisible]); 

  const handleClick = () => {
    dispatch({ type: "switchModal", payload: !app.modalVisible });
  };

 
  return (
    <header className="fixed top-0 z-50 right-0 pt-6 pr-6">
      <div className="relative flex items-center justify-center w-[15vw] h-[15vw] sm:w-[10vh] sm:h-[10vw] md:w-[8vw] md:h-[8vw]" onClick={handleClick}>
        <img
          className={`w-[60px] drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out ${squareRotation}`}
          src="/images/ruut.webp"
          alt="Navigatsiooni menüü"
        />
        <img className="absolute w-[30%] h-[30%] sm:w-[25%] md:w-[20%] md:h-[20%] transition-transform duration-300 ease-in-out" src={menuIcon} alt="Hamburgermenüü" />
      </div>
    </header>
  );
};
export default MobileHeader;
