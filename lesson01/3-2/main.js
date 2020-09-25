const num =Number(process.argv[2])
const numb =Number(process.argv[3])

for (let i=0;i<num;i++){
  let result =[];
  if(num%2===0){
    result.push("*");
  }else{
    result.push("-");
  }
  for(let t=0;t<numb;t++){
    if(numb%2===0){
      result.push("*")
    }else{
      result.push("-")
    }
    if(numb%2===1){
      result.push("-")
    }else{
      result.push("*")
    }
  }
  console.log(result.join(""));   
}


