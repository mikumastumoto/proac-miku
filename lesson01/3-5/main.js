const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
let count=[0,0,0,0,0,0,0,0,0,0,0];
for(let i = 0;i<students.length;i++){
  
  let score=Math.floor(students[i]/10);
  count[score]++;     //0,1,2,3,4,5,6,7,8,9,10

}
//console.log(count);
let max = Math.max(...count);
//console.log(max);
for(let k= 0;k<max;k++){
  let array =[];
  for (let j = 0;j<count.length;j++){
    
    if(count[j]>=max-k){
      array.push("*");
    }else{
      array.push(" ");
    }
    
  }
  console.log(array.join(" "));
}  
console.log("----------------------------------");
console.log("0 10 20 30 40 50 60 70 80 90 100");