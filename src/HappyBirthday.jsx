import { useEffect, useState } from "react";

const contents = [
  [
    "./1.jpg",
    "começamos a nos apaixonar (graças a mim obvio que sempre te amei)",
  ],
  ["./2.jpg", "vivo meus melhores momentos quando estou contigo"],
  [
    "./3.jpg",
    "tiramos fotos maravilhosas pra mostrar nosso amor pra todo mundo (menos nao dando pra expressar todo esse amor por fotos)",
  ],
  [
    "./4.jpg",
    "nao sei mais oq escrever e só to na 4 de 35 fotos, entao so tenho pra falar que TE AMO",
  ],
  [
    "./5.jpeg",
    "tu sempre se esforça pra fazer as fantasias, e eu como um chato nunca faco nada. Mas tentamos ir combinando sempre",
  ],
  ["./6.jpg", "amo te encher de beijinhos"],
  [
    "./7.jpg",
    "tentando tirar fotos fodas e cheio da marra, mas no fim sou todo caidinho por ti",
  ],
  ["./8.jpg", "sempre te amarei (essa tbm fiquei meio sem ideia)"],
  [
    "./9.jpg",
    "A cara de acabado nas festas (provavelmente uma foto que tu tirou pra enviar pra tua mae, e eu nao deixei por causa da minha cara. No fim tu deve ter enviado...)",
  ],
  [
    "./10.jpg",
    "Um dos melhores dias da minha vida quando te pedi em namoro e foi tudo perfeito, to louco pra fazer novamente hihi",
  ],
  ["./11.jpg", "topando fazer essas tuas ideais maravilhosas cntg que eu amo"],
  [
    "./12.jpg",
    "uma das primeiras festas juntos, tu tava muito linda com essa roupa branca e morena",
  ],
  ["./13.jpg", "comendo pipoquinha e vendo um filme com a melhor companhia"],
  ["./14.jpg", "pingolino (meu deus tem muita foto ainda)"],
  [
    "./15.jpg",
    "teu cheiro e maravilhoso, e amo quando tu dorme la em casa pq o quarto fica com teu cheiro pelo resto da semana!!",
  ],
  ["./16.jpg", "mais uma vez topando tua ideia provavelmente"],
  [
    "./17.jpg",
    "passando nosso primeiro ano novo junto, cntg maravilhosa como sempre",
  ],
  ["./18.jpg", "te amo infinito e sempre te amei"],
  [
    "./19.jpeg",
    "jesus q foto é essa. provavelmente enviado pra mae de algum dos individuos",
  ],
  [
    "./20.jpg",
    "andando de carro com o pai aqui motora, braço, mais conhecido como blazu o'conner",
  ],
  ["./21.jpg", "me ama mesmo com minhas espinhas pela cara"],
  [
    "./22.jpg",
    "provavelmente tu nao estava querendo que eu tirasse essa foto, mas eu tirei pq sou rebelde e eu que mando na relação (meme)",
  ],
  [
    "./23.jpg",
    "tu com tuas fotos preto e branco... Esse sorriso lindo, encantador, que eu sou completamente apaixonado!",
  ],
  ["./24.jpg", "tu linda maravilhosa com essa roupa e esse sorriso que amo"],
  ["./25.jpg", "fazendo bobiça na praia me divertindo cntg"],
  [
    "./26.jpg",
    "tu linda com esse cabelo ondulado e o meu parece q foi lambido por uma vaca",
  ],
  [
    "./27.jpg",
    "acho q esse momento foi qual eu percebi em como eu sou apaixonado por ti e te quero pro resto da minha vida",
  ],
  ["./28.jpg", "esse sorriso contagiante que anima meu dia"],
  [
    "./29.jpg",
    "amo estar cntg, te abraçar, te sentir, sentir tua presença, teu cheiro, tudo em ti é perfeito e eu amo",
  ],
  [
    "./30.jpeg",
    "inventando comidinhas na cozinha pra nao passar fome. Inclusive éis uma otima cozinheira",
  ],
  ["./31.jpg", "combinandinho de jeans e preto novamente"],
  [
    "./32.jpg",
    "essa foto maravilhosa que mostra nossa uniao(que frase cliche). quero conhecer lugares lindo sempre cntg ao meu lado, assim posso admirar a beleza do local e a tua",
  ],
  ["./33.jpg", "nossa felicidade sendo crianças novamente"],
  [
    "./35.jpg",
    "deitadinhos no sofa, me sentido o mais confortavel possivel por estar cntg, meu porto seguro",
  ],
  [
    "./34.jpg",
    "Feliz aniversario meu amor! Eu sempre vou estar cntg nos momentos que tu permitir, e quero estar presente em todos os teus mais felizes. Conta comigo pra sempre, tu mora no meu coração e nunca vai sair. Te quero no meu futuro, quando a gente ter que acordar pra trabalhar, chegar do serviço cansado, e só aproveitar por estarmos juntinhos! Te amo muito mais que o infiito, teu sorriso, teu cheiro, teu jeito, tua voz, teu corpo, teu cabelo, teu beijo, tudo em ti é perfeito e sou completamente caidinho por ti. Aproveita teu dia e juizo que agora pode ser presa por me agredir! kkkkk",
  ],
];

export function HappyBirthday() {
  const [imagem, setImagem] = useState(0);
  const [content, setContent] = useState({});

  const handleHeart = () => {
    setImagem(imagem + 1);
    return;
  };

  useEffect(() => {
    setContent(contents[imagem]);
  }, [imagem]);

  const container = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={container}>
      <h2 style={{ margin: "0 6rem", fontWeight: "300" }}>{`${
        content && content[1]
      }`}</h2>
      <div>
        <img src={`${content && content[0]}`} height="450" />
      </div>
      <button onClick={() => handleHeart()}>Colocar amor &#129505;</button>
    </div>
  );
}
