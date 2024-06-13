import { GiWerewolf } from "react-icons/gi";
import HPBAr from "./HPBar";

export default function Player(hp, atk) {
  

    return (
      <div className="flex flex-col items-center justify-center">
        <HPBAr hp={hp}></HPBAr>
        <h1 className="mt-5">HP: {hp.hp} </h1>
        <h1 className="mt-1">ATK: {hp.atk} </h1>
        <GiWerewolf className="text-9xl transform scale-x-[-1]"></GiWerewolf>
      </div>
    );
  }
  