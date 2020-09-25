const str = "こはるはるここはるここはるはるここはるこはるはるはる"
let countk =0; //こはる
let counth =0; //はるこ
let k ="こ";
let h ="は";
let r = "る";

for (let i = 0;i<str.length;i++){
  if(str[i]===k&&str[i+1]===h&&str[i+2]===r){
    countk++
  }
  if(str[i]===h&&str[i+1]===r&&str[i+2]===k){
    counth++
  }
}
console.log('こはる:',countk);
console.log('はるこ:',counth);
