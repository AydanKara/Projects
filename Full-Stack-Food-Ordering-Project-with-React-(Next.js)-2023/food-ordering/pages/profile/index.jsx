import Image from "next/legacy/image";
import React from "react";

const Profile = () => {
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)]">
      <div className="w-80">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/client1.jpg"
            alt="client"
            width={100}
            height={100}
            className="rounded-full"
          />
          <b className="text-2xl mt-1">Sevi Kara</b>
        </div>
        <ul className="text-center font-semibold">
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-shopping-cart"></i>
            <button className="ml-1">Orders</button>
          </li>
          <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <button className="ml-1">Exit</button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default Profile;
