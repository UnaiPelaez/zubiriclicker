"use client";

import "./globals.css";
import { Main } from "next/document";
import Image from "next/image";
import Player from "@/components/Player";
import Rival from "@/components/Rival";
import Stage from "@/components/Stage";
import Menu from "@/components/Menu";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  function generateHexColor() {
    // Genera valores aleatorios para los componentes RGB
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convierte los valores a formato hexadecimal
    const hexColor = `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    return hexColor;
  }

  //Background
  const [color1, setColor1] = useState(generateHexColor());
  const [color2, setColor2] = useState(generateHexColor());

  //Player
  const [maxHpPlayer, setMaxHpPlayer] = useState(100);
  const [hpPlayer, setHpPlayer] = useState(100);
  const [atkPlayer, setAtkPlayer] = useState(20);

  //Rival
  const [maxHpRival, setMaxHpRival] = useState(30);
  const [hpRival, setHpRival] = useState(30);
  const [atkRival, setAtkRival] = useState(10);

  //EstadoRival
  const [isDead, setIsDead] = useState(false);

  function attack() {
    setHpRival(hpRival - atkPlayer);
   
  }
  function rivalAttack() {
    setHpPlayer(hpPlayer - atkRival);
  }

  useEffect(() => {
    //Entra cuando el rival muere
    if (hpRival <= 0) {
      setIsDead(true);

      //Rival
      setMaxHpRival(maxHpRival + 10); //Vida maxima +5
      setAtkRival(atkRival + 5); //Ataque + 5

      //Player
      setAtkPlayer(atkPlayer + 5); //Ataque + 5
      setMaxHpPlayer(maxHpPlayer + 5); //Vida maxima + 5
      setHpPlayer(hpPlayer + 5); //Vida + 5
    }else{
      rivalAttack();
    }
  }, [hpRival]);

  useEffect(() => {
    setHpRival(maxHpRival); //Recupera la vida
    setIsDead(false);
  }, [isDead]);
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen">
      <h1 className="text-4xl text-center mb-10 uppercase font-medievalsharp m-5">
        Aquella vez que reencarné en una oveja y empecé a matar lobos
      </h1>
      <Stage color1={color1} color2={color2}></Stage>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-around w-full">
          <Player
            maxHp={maxHpPlayer}
            currentHp={hpPlayer}
            atk={atkPlayer}
          ></Player>
          <Rival maxHp={maxHpRival} currentHp={hpRival} atk={atkRival}></Rival>
        </div>
        <hr className="border-8 w-3/4"></hr>
      </div>

      <Menu attack={attack}></Menu>
    </main>
  );
}
