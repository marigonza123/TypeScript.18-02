// Import stylesheets
import { Greeter } from './greeter';
import './style.css';

//Comentando com múltiplas linhas
/* Várias linhas
de comentário*/

// Declaração de constantes
const myVAR1: number = 42;
const myVAR2: number = 42;
//Declaração de variáveis
let myVAR3 = 42;
let myVAR4: number = 42;
let myVAR5: string = 'Olá';

let mySetence: string = 'Blablabla';

//Utilizando o console
console.log('Olá, mundo');

//Declarando arrays
let list: number[] = [21, 2, 65, 55, 10, 98, 3, 9, 80, 42];

//Utilizando laços de repetição
console.log('Laço');
for (let i = 1; i < 10; i++) {
  console.log(list[i]);
}
//Utilizando condicionais
if (myVAR1 % 2 == 0) {
  console.log(myVAR1 + ' é PAR');
} else {
  console.log(myVAR1 + ' é ÍMPAR');
}
//Utilizando laços e condicionais
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Declarando tipos enumerados
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
enum ColorWithReferences {
  Red = 1,
  Green = 2,
  Blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.Green;

//Declarando any
let notSure: any = 42;
notSure = 'Maybe a string instead';
notSure = false; ///definitivamente é booleano

//Declarando void
function aviso(): void {
  console.log('Mensagem de alerta!');
}
aviso();

//Declarando funções
function soma(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(soma(21, 21));

function getFullName(pessoa: { name: string; lastName: string }): string {
  return pessoa.name + ' ' + pessoa.lastName;
}
let p = { name: 'Marina', lastName: 'Gonzalez' };
console.log(getFullName(p));

let counter = 0;
let intervalId = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'Contador: ' + counter;
}, 1000);

//Utilizando classe externa
let saudacao = new Greeter("Mundo");

let title: string = 'Olá, mundo!';
let paragraph: string = 'Blablabla';

//Write Typescript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>${title}</h1>
<p>${paragraph}</p>
<div id='counterDiv'></div>
<hr/>
<button id='appButton' onclick="alertIsMethod()">Alertar</button>
<hr/>
<div>${saudacao.getGreeting()}</div>
`;

//Declarando uma função para ser invocada por um evento
const btn = document.getElementById('appButton');
btn?.addEventListener('click', alertIsMethod);
function alertIsMethod(this: HTMLElement, ev: Event) {
  alert('Alertando usando Typescript');
}
