/* eslint-disable */
function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


function getRandomExcuse() {
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
  let subject = getRandomElement(who);
  let verb = getRandomElement(action);
  let object = getRandomElement(what);
  let time = getRandomElement(when);
  let excuse = `${subject} ${verb} ${object} ${time}.`;
  return excuse;
}


function updateExcuse() {
  let randomExcuse = getRandomExcuse();
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = randomExcuse;
}


window.onload = updateExcuse();
