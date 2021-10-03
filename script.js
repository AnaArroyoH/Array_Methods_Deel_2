// A Find Spiderman
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderMan = (spiderman) => {
    return spiderman.name === 'Spiderman';
};

console.log(superheroes.find(findSpiderMan));
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// Alternative
const findSpiderMan1 = superheroes.find(({ name }) => name === 'Spiderman');

console.log(findSpiderMan1);

// B Double the numbers inside an array using .map
const doubleArrayValues = (array) => {
    return array.map(number => {
        return number * 2;
    });
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// C Check if there are numbers higher than 10 inside the array
const containsNumberBiggerThan10 = (array) => {
    return array.some(number => {
        return number > 10;
    });
};

// console.log ("Is there a number bigger than 10?", 
// containsNumberBiggerThan10 ([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log("Is there a number bigger than 10?",
    containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// Alternative
// const numbers = [1, 4, 3, 6, 9, 7, 11];
const numbers = [1, 2, 1, 2, 1, 2];

const containsAgainNumberBiggerThan10 = numbers.some((number) => {
    return number > 10;
});
console.log(containsAgainNumberBiggerThan10);

// D Check if a specific string is inside the array
const great7 = ['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States'];

const isItalyInTheGreat7 = great7.includes('Italy');

console.log(isItalyInTheGreat7);
// result should be true

// E Each number times 10 using .forEacg
const tenfold = (array) => {
    const newArray = [];
    array.forEach(number => {
        newArray.push(number * 10);
    });
    return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]

// Try outs bellow did not work :(
// const numbers1 = [1, 4, 3, 6, 9, 7, 11];
// numbers1.forEach = (number) => {
//     return (number * 10);
// };
// const tenfold = (array) => {
//     return array.forEach (number * 10);
// };
// console.log (tenfold [1, 4, 3, 6, 9, 7, 11]);

// G Checking if all numbers inside the array are lower than 100
function isBelow100(array) {
    return array.every(number => {
        return number < 100;
    });
}

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]))

// This dit not work
// const isBelow100 = numbers.every ((number) => {
//     return number < 100;
// });

// G add each number inside the array and return the total sum
const bigSum = (array) => {
    return array.reduce((currentTotal, number) => {
        return currentTotal + number;
    }, 0);
};

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
// result should be 1118
