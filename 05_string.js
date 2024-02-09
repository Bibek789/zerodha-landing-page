const name = "bibek"
const  repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName  = new String('bibek-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.lastIndexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   bibek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bibek.com/bibek%20panda"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));