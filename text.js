const text = {
    first: str => str[0],
    middle: str => str[Math.floor((str.length - 1) / 2)],
    last: str => str[str.length - 1],

};

const position = 'middle'; // first | middle | last

const word = 'Labas';

const letter = text[position](word);

console.log(`${position} letter of word "${word}" is ${letter}`);