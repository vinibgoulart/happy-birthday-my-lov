import { useEffect, useState } from "react";

const contents = [
  ["./1.jpg", "Comecamos a nos apaxionar"],
  ["./2.jpg", "asokaiksa"],
  ["./3.jpg", "mmmm"],
  ["./4.jpg", "qqq"],
];

export function HappyBirthday() {
  const [imagem, setImagem] = useState(0);
  const [content, setContent] = useState({});
  const [counter, setCounter] = useState(1);

  const handleHeart = () => {
    if (counter % 4 === 0) {
      setImagem(imagem + 1);
      setCounter(1);
      return;
    } else {
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    setContent(contents[imagem]);
  }, [imagem]);

  return (
    <div className="flex">
      <h1>{`${content && content[1]}`}</h1>
      <div>
        <img src={`${content && content[0]}`} />
      </div>
      <button onClick={() => handleHeart()}>Colocar amor &#129505;</button>
    </div>
  );
}
