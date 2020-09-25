const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]
for (let i =0;i<errorLogs.length;i++){
  let start = errorLogs[i].indexOf(":");
  let end = errorLogs[i].indexOf("-");
  console.log(errorLogs[i].substring(start+1,end));
}