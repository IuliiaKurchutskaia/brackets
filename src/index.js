module.exports = function check(str, bracketsConfig) {
  if(str.length%2!=0|| typeof str !== "string"){
    return false;
  }

let s=[]
  for(let i = 0; i < str.length; i++) {
    if((str[i]=='{')||(str[i]=='(')||(str[i]=='[')||(str[i]=='|')){
  s.push(str[i]);
}
if(str[i]=='}'&&(s.includes('{'))) {
 
  s.pop();
}
if(str[i]==')'&&(s.includes('('))){
 
  s.pop();
}
if(str[i]==']'&&(s.includes('['))){
 
  s.pop();
}
if(str[i]=='|'&&(s.includes('|'))){
 
  s.pop();
}
else {
 
  return false;
}
}
return s.length==0;
}



