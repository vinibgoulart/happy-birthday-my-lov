import { DateCountdown } from "./counter";

function App() {
  return (
    <div className="timer">
      &#129505; &#129310;
      <DateCountdown
        dateTo="September 24, 2022 00:00:00 GMT-03:00"
        callback={() => alert("Hello")}
      />
      &#129310; &#129505;
    </div>
  );
}

export default App;
