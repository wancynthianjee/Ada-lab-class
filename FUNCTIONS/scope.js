let a=20; //Global variable 

function add(b){
    console.log(a+ b);
    let c=30;
    console.log((a));
    console.log(a+b+c);
    a=60;
}
add(20);
console.log("a2",a);

function multiply(c){
    console.log(a*c)
}
multiply(3);

function greet(){
    let hello="Hi";
    function talk(){
        let greeting= "hey there";
        console.log(`${hello} ${greeting}`);
    
    }
    talk()
}
greet()
