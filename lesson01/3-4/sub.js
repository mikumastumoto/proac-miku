const str = String(process.argv[2]);
const number = str.split("").reverse().join("");
const str2 = String(process.argv[3]);
const number2 =str2.split("").reverse().join("");
console.log(Number(number)+Number(number2));