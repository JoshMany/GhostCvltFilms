import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
  const BrandNameAnchor = () => {
    return (
      <h1 className="font-UrbanistSemibold text-yellow uppercase font-semibold text-[20px] md:text-[23px]">
        <Link to={"/"}>Ghost Cvlt Films</Link>
      </h1>
    );
  };

  const MenuBtn = () => {
    return (
      <button
        className="md:hidden"
        onClick={() => {
          setDrawerState(!drawerState);
        }}
      >
        <Menu size={26} color="#FFF" />
      </button>
    );
  };

  const NavElement = ({ label, path }) => {
    return (
      <li>
        <p className="text-white text-[19px] whitespace-nowrap items-center">
          {" "}
          <Link to={path} className="items-center">
            {label}
          </Link>
        </p>
      </li>
    );
  };

  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="flex flex-row justify-between px-8 fixed z-10 w-screen backdrop-blur-lg md:px-12 items-center">
      <BrandNameAnchor />
      <MenuBtn />
      <nav
        className={`top-0 absolute transition-all flex flex-col bg-black h-screen w-screen px-8 z-50 md:px-12 md:content-center ${
          drawerState ? "-left-0  " : "-left-[200%]"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <BrandNameAnchor />
          <MenuBtn />
        </div>
        <ul className="relative flex flex-col mt-6 text-2xl gap-5 text-right">
          <NavElement label={"Work"} path={"/work"} />
          <NavElement label={"About us"} path={"/about"} />
          <NavElement label={"Services"} path={"/services"} />
          <NavElement label={"Contact"} path={"/contact"} />
        </ul>
        <div className="relative flex-1">
          <p className="absolute text-white uppercase mb-2 bottom-0 text-sm">
            We&apos;re making your product work.
          </p>
        </div>
      </nav>
      <div className="hidden md:flex">
        <ul className="flex flex-row text-3xl gap-10">
          <NavElement label={"Work"} path={"/work"} />
          <NavElement label={"About us"} path={"/about"} />
          <NavElement label={"Services"} path={"/services"} />
          <NavElement label={"Contact"} path={"/contact"} />
        </ul>
      </div>
    </div>
  );
}
