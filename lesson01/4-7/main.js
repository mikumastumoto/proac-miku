
const name = process.argv[2].toLowerCase();//名前
const alphabet =process.argv[3].toLowerCase();//アルファベット
const str = name.split(',')
//console.log(str,alphabet);

let  arr =[];

for(let i = 0; i <str.length ; i++){
  if(str[i].indexOf(alphabet)!==-1){
    arr.push(str[i]);
  }
}
console.log(arr.sort());