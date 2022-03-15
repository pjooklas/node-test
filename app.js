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

const colors = [];

for (const person of people) {
    const { color } = person;
    colors.push(color);
}

console.log(colors);