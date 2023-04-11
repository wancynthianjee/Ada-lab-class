let num =[10,30,3,8,7,16,45];
let i=0;
do{
    console.log(num[i]);
    i++;
}
while(i<num.length);
//break statement

for(let i=0; i<num.length; i++){
    console.log({"num":num[i]});
if(i===2){
    break;
}
// console.log({"num":num[i]});
}
//continue statement
for(let i=0; i<num.length; i++){
    // console.log({"continue":num[i]});
if(i===3){
    continue;
}
console.log({"continue":num[i]});
}