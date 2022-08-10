import React, { useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import { fetchHorses } from "../../store/action-creators/horsesActionCreator";
import { HorseItem } from "../HorseItem/HorseItem";
import { selectHorses } from "../../store/selectors/horsesSelector";

export const HorseList = () => {
  const dispatch = useDispatch();

  const { horses } = useSelector(selectHorses);
  const socketRef = useRef(null);
  const url = "http://localhost:3002";

  useEffect(() => {
    socketRef.current = socketIOClient(url);
    socketRef.current.on("ticker", (data) => {
      dispatch(fetchHorses(data));
    });
  }, []);

  const onStart = () => {
    socketRef.current.emit("reset");
    socketRef.current.emit("start");
  };

  return (
    <>
      <button onClick={onStart}>Start</button>
      {horses.map(({ name, distance }) => (
        <HorseItem key={name} name={name} distance={distance} />
      ))}
    </>
  );
};
