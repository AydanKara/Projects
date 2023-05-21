import Image from "next/legacy/image";
import React from "react";
import Title from "./UI/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative w-[445px] h-[600px] flex justify-center">
            <Image src="/images/about-img.png" alt="about" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2">
          <Title addClass="text-[40px]">We Are Feane</Title>
          <p className="my-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
