import React from "react";
import { LuSword } from "react-icons/lu";
import { GiHealthPotion } from "react-icons/gi";

export default function Menu({attack}) {
 

  return (
    <footer className="flex justify-center items-center border-8 rounded bg-transparent z-10 w-1/2 m-5">
      <button className="border-4 rounded-full p-5 m-5 transform transition-transform hover:scale-110"
        onClick={attack}
      >
        <LuSword className="text-6xl" />
      </button>

      <button
        className="border-4 rounded-full p-5 m-5 transform transition-transform hover:scale-110"
       
      >
        <GiHealthPotion className="text-6xl" />
      </button>
    </footer>
  );
}
