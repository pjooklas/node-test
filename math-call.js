const sudeti = (a, b) => a + b;
const atimti = (a, b) => a - b;
const padalinti = (a, b) => a / b;
const sudauginti = (a, b) => a * b;

const n1 = 7;
const n2 = 5;

// turi gauti skaicius ir norima panaudoti funkcija
function skaiciuok(a, b, action) {
    return action => (a, b);
}

// const r1 = 12;
const r1 = skaiciuok(7, 5, 'sudeti');
const r2 = 2;
const r3 = 1.4;
const r4 = 35;

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);