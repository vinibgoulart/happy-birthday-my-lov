import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CounterDate } from "./CounterDate";
import { HappyBirthday } from "./HappyBirthday";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CounterDate />} />
      <Route path="/congratulations" element={<HappyBirthday />} />
    </Routes>
  );
}
