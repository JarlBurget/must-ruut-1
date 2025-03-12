import { Link } from "react-router"

const DesktopHeader = () => {
  return (
    <header className="fixed w-full h-16 lg:h-20 xl:h-26 z-10 bg-black/70 backdrop-blur-lg gap-8">
        <nav className="flex justify-between items-center h-full px-10 lg:px-15 xl:px-25 text-white text-xl lg:text-2xl xl:text-3xl text-center">
            <div className="flex flex-row justify-between items-center h-full w-1/2 pr-20 lg:pr-25 xl:pr-35">
                <Link to="/#concerts"><div className="basis-3/7 flex-none" data-testid="concerts">Kontserdid</div></Link>
                <Link to="/#music"><div className="basis-3/7 flex-none"  data-testid="music">Muusika</div></Link>
                <div className="basis-1/7 flex-none"></div>
            </div>
            <div className="absolute w-screen flex flex-row justify-center left-0 top-8 pointer-events-none">
              <Link to="/#hero" className="pointer-events-auto" data-testid="hero"><img className="w-[65px] lg:w-[95px] xl:w-[140px] transform rotate-45 filter drop-shadow-[0_0_20px_rgba(231,17,17,_1)] drop-shadow-[0_0_30px_rgba(256,1,1,_1)] transition-transform transition-filter duration-300 ease-in-out" src="/images/ruut.webp" alt="Must ruut"/></Link>
            </div>
            <div className="flex flex-row justify-between items-center h-full w-1/2 pl-20 lg:pl-25 xl:pl-35">
                <Link to="/#about-us"><div className="basis-1/3 flex-none" data-testid="about-us">Meist</div></Link>
                <Link to="/#contact-form"><div className="basis-1/3 flex-none" data-testid="contact">Kontakt</div></Link>
                <Link to="/demos"><div className="basis-1/3 flex-none"data-testid="demos">Demod</div></Link>
            </div>
        </nav>
    </header>
  )
}
export default DesktopHeader