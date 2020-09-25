const songs = require('./songs.json');
const jsonp = require('./playdata.json');
//console.log(jsons,jsonp);
const jsons = songs.songs
const data = jsonp.data
//console.log(data);

for(let i =0;i<data.length;i++){
  data[i].id =Number(data[i].id);
  data[i].count = Number(data[i].count)
}
//sort並び替え
data.sort(function(a,b){
  return b.count-a.count
})
//console.log(data);
for(let j =0;j<data.length;j++){
  for(let k =0;k<jsons.length;k++){
    if(data[j].id === jsons[k].id){
      console.log(`${k+1}:${jsons[k].title}\t${data[j].count}`);
    }
  }
}
console.log(jsons[0].title)