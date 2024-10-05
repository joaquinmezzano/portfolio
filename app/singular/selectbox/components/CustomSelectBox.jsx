"use client";
import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const cities = ["Rio Cuarto", "Córdoba", "Villa Maria", "Huinca", "Sampacho"];

const CustomSelectBox = () => {
  const [selectedCity, setSelectedCity] = useState("Rio Cuarto");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center w-fit relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer"
        >
          <span>{selectedCity}</span>
          <BsChevronExpand className="text-gray-400" />
        </div>
        <div
          className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-16 lef-0`}
        >
          {cities.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelectedCity(item);
                setOpen(false);
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-2 hover:bg-orange-200 cursor-pointer ${
                selectedCity === item ? "bg-orange-200" : ""
              }`}
            >
              <AiOutlineCheck
                className={`text-orange-600 ${
                  selectedCity === item ? "opacity-100" : "opacity-0"
                }`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-100 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default CustomSelectBox;
