import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../UI/Logo";
import Search from "../UI/Search";
import Link from 'next/link';

import {
  FaUserAlt,
  FaShoppingCart,
  FaSearch,
  FaHamburger,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  const router = useRouter();

  return (
    <div className={`relative h-[5.5rem] z-50 ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}>
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden flex flex-col items-center hover:text-primary transition-all"
            onClick={() => setIsMenuModal(true)}
          >
            <FaHamburger />
            <span className="text-xs">MENU</span>
          </button>
          {isMenuModal && (
            <button
              className="absolute top-4 right-4 sm:hidden"
              onClick={() => setIsMenuModal(false)}
            >
              <AiFillCloseCircle
                size={30}
                className="text-gray-400 transition-all hover:text-primary"
              />
            </button>
          )}
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
