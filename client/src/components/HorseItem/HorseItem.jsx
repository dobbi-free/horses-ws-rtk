import React from "react";
import style from "./horse-item.module.css";
import horse from "../../static/horse.svg";

export const HorseItem = ({ name, distance }) => {
  return (
    <>
      <div key={name} className={style.horse}>
        <div
          className={style.horse__item}
          style={{ left: `${distance / 10}%` }}
        >
          <p className={style.horse__name}>{name}</p>
          <img className={style.horse__img} src={horse} alt="#" />
        </div>
      </div>
    </>
  );
};
