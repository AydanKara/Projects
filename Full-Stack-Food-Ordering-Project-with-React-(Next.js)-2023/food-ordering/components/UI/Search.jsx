import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../UI/Title";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed grid place-content-center w-screen h-screen top-0 left-0 z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="p-10 rounded-3xl relative z-50 md:w-[600px] w-[370px] bg-white border-2">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10"
            />
            <div>
              <ul>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                  <div className="relative flex">
                    <Image
                      src="/images/f1.png"
                      alt="food"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsSearchModal(false)}
              >
                <AiFillCloseCircle
                  size={30}
                  className="text-gray-400 transition-all hover:text-primary"
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
