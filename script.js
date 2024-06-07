function aleatorio(items) {
  let indice = Math.floor(Math.random() * items.length);
  return items[indice];
}
/*Criando uma função(tipo o def em python, tem a mesma finalidade) para pegar um item da lista de forma aleatória*/

let frasesDia = [
  "É importante agradecer pelo hoje sem nunca desistir do amanhã!",
  "A ideia é nunca perder a motivação para subir cada degrau rumo ao sucesso, por mais difícil que seja. E também não esquecer de agradecer pelas lições aprendidas em cada etapa da jornada.",
  "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
  "Se expressarmos gratidão pelo que temos, teremos mais por que expressar gratidão.",
  "Só há felicidade se não exigirmos nada do amanhã e aceitarmos do hoje, com gratidão, o que nos trouxer. A hora mágica chega sempre.",
  "Só tenho gratidão por tudo o que enfrentei até chegar aqui. E também muita esperança no coração por todos os desafios que ainda virão!",
  "Quando seu coração está pleno de gratidão, qualquer porta aparentemente fechada pode ser uma abertura para uma bênção maior.",
  "A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.",
];

let frasesNoite = [
  "Verifiquei que, aos homens, se devia agradecer o menos possível, porque o reconhecimento que lhes testemunhamos os convence, facilmente, de que estão a fazer de mais!",
  "Feliz de quem recebeu do céu um pedaço de pão e não precisa de agradecer a ninguém além do próprio céu.",
  "A gratidão é o único tesouro dos humildes.",
  "As pessoas felizes lembram o passado com gratidão, alegram-se com o presente e encaram o futuro sem medo.",
  "Quem acolhe um benefício com gratidão, paga a primeira prestação da sua dívida.",
  "Aprendi o silêncio com os faladores, a tolerância com os intolerantes, a bondade com os maldosos; e, por estranho que pareça, sou grato a esses professores.",
  "Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.",
  "A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.",
];

let frasesTarde = [
  "Conserve os olhos fixos num ideal sublime e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida.",
  "Ame, acredite, pense, grite, sonhe, conquiste, lute, batalhe, tenha força, tenha foco, tenha fé. Sorria e agradeça a Deus por mais um dia.",
  "Ame, acredite, pense, grite, sonhe, conquiste, lute, batalhe, tenha força, tenha foco, tenha fé. Sorria e agradeça a Deus por mais um dia.",
  "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.",
  "Acredite em si e chegará um dia em que os outros não terão outra escolha senão acreditar com você.",
  "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.",
  "Quer você acredite que consiga fazer uma coisa ou não, você está certo.",
  "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
];

/*Essa parte acima, é a criação das frases motivacionais, são 3 listas com 8 frases, eu deixei compacto pois fica muito grande*/

var hora = new Date().getHours(); /*Pedindo a hora atual do computador(toda vez que for executado ele vai ver que horas são) */
var cumprimento = document.getElementById("cumprimento");
var frase = document.getElementById("frase");
/*Criando variáveis pra conseguir mexer com o HTML através do javascript */

if (hora > 5 && hora < 13) {
  cumprimento.innerHTML = "Bom dia!!!";
  frase.innerHTML = aleatorio(frasesDia) /*Chamando a função pra pegar um item da lista aleatoriamente */;
} else if (hora > 12 && hora < 18) {
  cumprimento.innerHTML = "Boa tarde!!!";
  document.body.style.backgroundImage = "url('imagem/tarde.jpeg')"; /*mudando o fundo da página */
  frase.innerHTML = aleatorio(frasesTarde) /*Chamando a função pra pegar um item da lista aleatoriamente */;
} else {
  cumprimento.innerHTML = "Boa noite!!!";
  document.body.style.backgroundImage = "url('imagem/noite.jpeg')"; /*mudando o fundo da página */
  frase.innerHTML = aleatorio(frasesNoite) /*Chamando a função pra pegar um item da lista aleatoriamente */;
}
/*Usando condicionais, verifico a hora atual, e faço a lógica pela hora de que horário do dia é, dependendo do horário, exibe uma imagem, e frase diferente*/