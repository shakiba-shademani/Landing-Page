import Image from "next/image";
import { useState } from "react";
import logo from "../public/img/logo.svg";
import navMenu from "../public/img/nav-menu.svg";
import Sidebar from "./Sidebar";
import styles from "../styles/Body.module.css";

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
          <div className="w-36 h-20 mt-12">
            <Image src={logo} />
          </div>
        </div>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden cursor-pointer w-8 h-12 mt-4"
        >
          <Image src={navMenu} />
        </div>

<div className={styles.shadow}><p className="font-bold text-2xl hidden md:block">درگاه های پرداخت الکترونیک سداد</p></div>
        

        <ul className="hidden md:flex md:items-center md:justify-around">
          <li className="hover:text-yellow-400 hover:font-bold">
            <a href="#">مستندات</a>
          </li>
          <li className="md:mr-14 hover:text-yellow-400 hover:font-bold">
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
