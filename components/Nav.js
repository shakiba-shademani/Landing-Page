import Image from "next/image";
import { useState } from "react";
import logo from "../public/img/Iva.svg";
import navMenu from "../public/img/nav-menu.svg";
import Sidebar from "./Sidebar";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu ? (
        <div className="md:hidden right-0 top-0 w-full z-50">
          <Sidebar />
        </div>
      ) : null}

      <nav className="flex items-center justify-between max-w-full h-20 fixed z-40 top-0 inset-x-0 py-2 px-8 border-b border-gray-200 bg-white">
        <div className="flex flex-col">
          <div className="w-16 h-20 mt-4 mr-4">
            <Image src={logo} />
          </div>
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden w-8 h-12 mt-4"
        >
          <Image src={navMenu} />
        </div>

        <ul className="hidden md:flex md:items-center md:justify-around">
          <li className="hover:text-pink-600 hover:font-bold">
            <a href="#">مستندات</a>
          </li>
          <li className="md:mr-14 hover:text-pink-600 hover:font-bold">
            <a href="#">تماس با ما</a>
          </li>
        </ul>

        <ul className="hidden md:flex md:items-center md:p-2">
          <li className="ml-4">
            <a href="#">ورود</a>
          </li>
          <li className="md:pr-2">
            <a
              className=" bg-slate-700 hover:bg-slate-900
        text-white hover:text-pink-600 font-bold h-10 p-2 rounded-3xl"
              href="#"
            >
              درخواست دمو
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
