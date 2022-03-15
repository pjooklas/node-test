const people = [{
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'red',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'orange',
    },
];

console.log('----------------');

// atsirenkame kokiu spalvu ir kokiais kiekiais yra masyve
const colorsCount = {};
for (const person of people) { //of naudojamas array
    const { color } = person; //destrukturizavimas
    // const color = person.color;
    colorsCount[color] = colorsCount[color] ? colorsCount[color] + 1 : 1;
}

// randame dazniausiai paminetos spalvos kieki (spalvos pavadinimas nera aktualus)
let mostPopularColorCount = 0;
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count > mostPopularColorCount) {
        mostPopularColorCount = count;
    }
}

// randame visus spalvu pavadinimus, kurie atitinka didziausia paminejimu kieki
const mostPopularColorNames = [];
for (const color in colorsCount) { //in naudojamas objektam
    const count = colorsCount[color];
    if (count === mostPopularColorCount) {
        mostPopularColorNames.push(color);
    }
}

console.log(mostPopularColorNames);