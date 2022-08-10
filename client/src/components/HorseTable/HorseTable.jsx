import React from "react";
import style from "../HorseList/horse-list.module.css";
import { HorseList } from "../HorseList/HorseList";

export const HorseTable = () => {
  return (
    <div className={style.tick_list}>
      <HorseList />
    </div>
  );
};
