import { DateCountdown } from "./counter";

function App() {
  return (
    <div className="timer">
      <DateCountdown
        dateTo="September 24, 2022 00:00:00 GMT-03:00"
        callback={() => alert("Hello")}
      />
    </div>
  );
}

export default App;
