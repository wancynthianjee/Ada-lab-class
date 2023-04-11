const items=[2,8,true, "seed",[7,9]];
// const a= new Array(2,8, true, "seed");
console.log(items);
// console.log(a);
// 2D Array(add another)
// item[4],[1]
console.log(items[3]);
console.log(items[4][1]);


items.push(6)//adds an item at the end//
console.log(items);
items.unshift("fruit");//adds an item at the begining//
console.log(items);
items.pop(); //removes an item at the end//
console.log(items);

items.shift();//removes an item at the front//
console.log(items);

//map methods take in parameters/arguements as fuction//

//Given an array of numbers,return an array xof each item multiplied by 4//
let num =[1,3,4,6,9,34];
 let x = num.map(function(item){
   return item * 4

})
console.log(x);
//just getting the items which returns undefined//
 let x1=num.forEach(function(item){
    return item * 4

})
console.log(x1);

//just getting the numbers for each  item//
let x2=num.forEach(function(item){
    console.log(item * 4)

})
console.log(x1);
//returns a defined array for each item in the array//
let x3=[];
num.forEach(function(item){
    x3.push(item * 4)
})
console.log(x3);

//merging arrays//
//Array concertination

let mix=items.concat(num)
console.log(mix);

//concepy of spreadoperators//

let b=[false, "deny",...num,];
console.log(b);

//destructuring//

let [z,p,y, ...v]=[1,3,4,7,9,78];
console.log(z);
console.log(p);
console.log(y);
console.log(v);
    



    
