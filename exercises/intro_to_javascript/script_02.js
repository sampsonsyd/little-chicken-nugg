// Make a list of words for each variable:

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

// Pick a random element from each array:
// https://css-tricks.com/snippets/javascript/select-random-item-array/

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let verb = verbs[Math.floor(Math.random() * verbs.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

let d = new Date();
let day = d.toLocaleString("en-us", { weekday: "long" });

let n = d.getDay();

switch (n) {
  case 1:
    console.log(
      `It's ${day}. My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    );
    break;
  case 2:
    console.log(
      `It's ${day}. My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    );
    break;
  case 3:
    console.log(
      `It's ${day}. My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    );
    break;
  case 4:
    console.log(
      `It's ${day}. My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    );
    break;
  case 5:
    console.log(
      `It's ${day}. My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    );
    break;
  default:
    console.log("it's the weekend");
}
