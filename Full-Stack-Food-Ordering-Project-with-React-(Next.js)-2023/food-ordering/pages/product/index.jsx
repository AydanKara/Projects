import Title from "@/components/UI/Title";
import Image from "next/legacy/image";
import React from "react";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap">
      <div className="relative flex-1 w-[80%] h-[80%] mx-20">
        <Image
          src="/images/f1.png"
          alt="img"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm md:pr-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          commodi unde corporis veniam reiciendis et explicabo sapiente possimus
          nemo exercitationem aliquid dolor nihil in ratione fugiat
          necessitatibus tempore, excepturi quis.
        </p>
        <div className="mt-6">
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-16 md:justify-start justify-center">
            <div className="relative w-8 h-8">
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-8 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/size.png" alt="size" layout="fill" />
              <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4">
          <h4 className="text-xl font-bold">Choose additional ingredients</h4>
          <div className="flex gap-x-4 my-2 md:justify-start justify-center">
            <label className="flex items-center gap-x-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">ketchup</span>
            </label>
            <label className="flex items-center gap-x-1">
              <input type="checkbox" className="w-5 h-5 accent-primary" />
              <span className="text-sm font-semibold">mayonnaise</span>
            </label>
          </div>
        </div>
        <button className="btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
