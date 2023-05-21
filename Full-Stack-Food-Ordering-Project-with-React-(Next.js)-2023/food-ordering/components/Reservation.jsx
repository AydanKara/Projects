import React from "react";
import Title from "./UI/Title";
import Input from "./form/input";

const Reservation = () => {
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
        <div className="lg:flex-1 !h-[483px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17700.00173084974!2d-0.13925553616505992!3d51.50501018208041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20Vereinigtes%20K%C3%B6nigreich!5e0!3m2!1sde!2sde!4v1684692881836!5m2!1sde!2sde"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
