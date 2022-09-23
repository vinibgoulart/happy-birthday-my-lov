import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DateCountdown } from "./counter";

export function CounterDate() {
  const navigate = useNavigate();
  const [displayButton, setDisplayButton] = useState("none");

  return (
    <div className="timer">
      <div>&#129505; &#129310;</div>
      <DateCountdown
        dateTo="September 24, 2022 00:00:00 GMT-03:00"
        callback={() => {
          setDisplayButton("inline");
        }}
      />
      <div>&#129310; &#129505;</div>

      <button>
        <Link style={{ display: displayButton }} to="/congratulations">
          Happy Birthday my Lov &#129505;
        </Link>
      </button>
    </div>
  );
}
