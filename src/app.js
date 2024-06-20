/* eslint-disable */

let who = [
  "An alien",
  "A bad worker",
  "The enemy",
  "Something",
  "An entity",
  "A virus"
];
let action = [
  "took control of",
  "messed with",
  "hid",
  "interfired with",
  "destroyed",
  "destabilised"
];
let what = [
  "this webpage",
  "the data",
  "the server",
  "the system",
  "the mainframe",
  "the firewalls"
];
let when = [
  "just now",
  "last week",
  "yesterday",
  "a few days ago",
  "in May",
  "on New Year's day"
];

function GetRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function GetRandomExcuse() {
  let subject = GetRandomElement(who);
  let verb = GetRandomElement(action);
  let object = GetRandomElement(what);
  let time = GetRandomElement(when);

  let excuse = `${subject} ${verb} ${object} ${time}.`;
  return excuse;
}

function UpdateExcuse() {
  let randomExcuse = GetRandomExcuse();
  let excuseElement = document.getElementById("excuse");
  excuseElement.textContent = randomExcuse;
}

window.onload = UpdateExcuse;
