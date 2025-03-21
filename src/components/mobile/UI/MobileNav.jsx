import { useAppContext } from "../../../context/AppContext";
import { Link } from "react-router";

const MobileNav = () => {
  const { app } = useAppContext();

  if (!app.modalVisible) {
    return null;
  }

  return (
    <side className="fixed top-0 right-0 h-100 w-50 bg-black/70 backdrop-blur-lg z-40 border-l-2 border-b-2 border-red-800 pt-16 flex flex-col justify-center items-center">
      <nav>
        <ul className="flex flex-col gap-5 text-2xl">
          <li>
            <Link to={"/#hero"}>Esileht</Link>
          </li>
          <li>
            <Link to={"/#concerts"}>Kontserdid</Link>
          </li>
          <li>
            <Link to={"/#music"}>Muusika</Link>
          </li>
          <li>
            <Link to={"/#about-us"}>Meist</Link>
          </li>
          <li>
            <Link to={"/demos"}>Demod</Link>
          </li>
        </ul>
      </nav>
    </side>
  );
};
export default MobileNav;
