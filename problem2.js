let str="mam"

let bag=""
for(i=str.length-1;i>=0;i--){
  bag+=str[i]
}

if(str==bag){console.log("palindrome")}
else{console.log("No")}