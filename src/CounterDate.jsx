import React from "react";
import { DateCountdown } from "./counter";

export function CounterDate() {
  return (
    <div className="timer">
      <div>&#129505; &#129310;</div>
      <DateCountdown
        dateTo="September 02, 2022 00:00:00 GMT-03:00"
        callback={() =>
          refreshPage(
            "http://http://127.0.0.1:5173/happy-birthday-my-lov/congratulations"
          )
        }
      />
      <div>&#129310; &#129505;</div>
    </div>
  );
}
