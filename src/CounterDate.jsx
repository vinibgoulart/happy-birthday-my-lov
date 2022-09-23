import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateCountdown } from "./counter";

export function CounterDate() {
  const navigate = useNavigate();
  const [displayButton, setDisplayButton] = useState("none");

  const handleHappyBirthday = () => {
    navigate("/happy-birthday-my-lov/congratulations");
    navigate(0);
  };

  return (
    <div className="timer">
      <div>&#129505; &#129310;</div>
      <DateCountdown
        dateTo="September 23, 2022 10:35:30 GMT-03:00"
        callback={() => {
          setDisplayButton("inline");
        }}
      />
      <div>&#129310; &#129505;</div>

      <button
        style={{ display: displayButton }}
        onClick={() => handleHappyBirthday()}
      >
        Happy Birthday my Lov &#129505;
      </button>
    </div>
  );
}
