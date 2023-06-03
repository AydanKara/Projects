import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../UI/Title";
import { AiFillCloseCircle } from "react-icons/ai";

const AddProduct = ({ setIsProductModal }) => {
  return (
    <div className="fixed grid place-content-center w-screen h-screen top-0 left-0 z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="p-10 rounded-3xl relative z-50 md:w-[600px] w-[370px] bg-white border-2">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>

            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1">Choose an image</span>
              <input type="file" />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Title</span>
              <input
                type="text"
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Description</span>
              <textarea
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Select Category</span>
              <select
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Write a title..."
              >
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
                <option value="1">Category 1</option>
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Prices</span>
              <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="small"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="medium"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="large"
                />
              </div>
            </div>
            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Extra</span>
              <div className="flex  gap-6 w-full md:flex-nowrap flex-wrap">
                <input
                  type="text"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="item"
                />
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="price"
                />
                <button className="btn-primary ml-auto">Add</button>
              </div>
              <div className="mt-2">
                <span className="inline-block border border-orange-500 text-orange-500  p-1 rounded-xl text-xs">
                  ketchup
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn-primary !bg-success ">Create</button>
            </div>

            <div>
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsProductModal(false)}
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

export default AddProduct;
