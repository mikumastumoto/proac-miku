let str = process.argv[2];
let str2 = process.argv[3];

function reverseString(str){
  return str.split("").reverse().join("")
}
let str3 = reverseString(str2);
let str4 = reverseString(str);
console.log(Number(str3)+Number(str4));