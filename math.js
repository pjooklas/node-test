const math = {
    sudeti: (a, b) => a + b,
    atimti: (a, b) => a - b,
    padalinti: (a, b) => a / b,
    sudauginti: (a, b) => a * b,
}

const action = 'padalinti';
const n1 = 7;
const n2 = 5;

// const ans = 0; // pakeisti sia eilute kad veiktu, panaudojant kintamuosius
const ans = math[action](n1, n2);
console.log(ans);