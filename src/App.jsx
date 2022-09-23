import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CounterDate } from "./CounterDate";
import { HappyBirthday } from "./HappyBirthday";

export default function App() {
  return (
    <Routes>
      <Route path="/happy-birthday-my-lov" element={<CounterDate />} />
      <Route
        path="/happy-birthday-my-lov/congratulations"
        element={<HappyBirthday />}
      />
    </Routes>
  );
}
