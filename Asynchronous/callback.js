function add (num,callback){
    console.log(num);
    callback();
}
function nums(){
    console.log("hello");

};
add(12,nums);

function add (num,callback){
    console.log(num);
    // callback();
    callback(num);
}
function nums(num){
    console.log("helllo");
    console.log(num + 30);

};
add(12,nums);