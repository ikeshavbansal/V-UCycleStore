import { SlideTabsExample } from "./slidetabs";
import main_logo from '../../assets/main-logo.png'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 bg-black">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img
          src={main_logo} // replace with your logo path
          alt="Logo"
          className="h-10 w-10 md:h-22 md:w-22"
        />
        {/* <span className="ml-2 text-lg font-bold">V&U</span> */}
      </div>

      {/* Center: Slide Tabs */}
      <div className="flex-1 flex justify-center">
        <SlideTabsExample />
      </div>

      {/* Right: placeholder (optional) */}
      <div className="w-10" /> 
    </header>
  );
};

export default Header