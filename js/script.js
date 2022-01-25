// Oppgave 1

const instrument = "guitar";
console.log(instrument);

// Oppgave 2

const button = document.querySelector("button.login");
console.log(button);

// Oppgave 3

const instruments = [
    {
        type: "guitar",
        colour: "red",
    },
    {
        type: "piano",
        colour: "black",
    },
];
console.table(instruments);

// Oppgave 4

var name = "Percival";
var age = 13;

{const name = "Percival"
const age = 13;};

// Oppgave 5

var total = 0;
total = total + 10;

{let total = 0;};

// Oppgave 6

for (var i = 0; i <= 5; i++) {
    console.log(i);
}
{let i = 0;};

// Oppgave 7

const firstName = "Florence";

const introduction = "Hello, my name is " + firstName + ".";

console.log(introduction);

{const introduction = `Hello, my name is ${firstName}.`};

// Oppgave 8

const title = "Big Technical Event";

const whatToHave = "good time";

const welcome = "Welcome! \n\n" +
                "This " + title + " is starting today.\n\n" +
                "Have a " + whatToHave + "!";

console.log(welcome);

{const welcome = `Welcome!

This ${title} is starting today.

Have a ${whatToHave}!`}

// Oppgave 9

const car = {
    "paint-colour": "red",
    "number of wheels": 3
};

console.log(car["paint-colour"]);
console.log(car["number of wheels"]);


// Oppgave 10

const product = {
    name: "Chicken Lips",
    price: 35,
    expired: false
}

getExpired = () => {
    console.log(product.expired);
}
getExpired();