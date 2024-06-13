import { GiSheep } from "react-icons/gi";
import HPBAr from "./HPBar";

export default function Player({ maxHp, currentHp, atk }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <HPBAr maxHp={maxHp} currentHp={currentHp}></HPBAr>
      <h1 className="mt-5">HP: {currentHp} </h1>
      <h1 className="mt-1">ATK: {atk} </h1>
      <GiSheep className="text-9xl"></GiSheep>
    </div>
  );
}
