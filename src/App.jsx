import { DateCountdown } from "./counter";

function App() {
  return (
    <div className="timer">
      <div>&#129505; &#129310;</div>
      <DateCountdown
        dateTo="September 24, 2022 00:00:00 GMT-03:00"
        callback={() => alert("Hello")}
      />
      <div>&#129310; &#129505;</div>
    </div>
  );
}

export default App;
