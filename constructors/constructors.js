function Person(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
    this.greet= function(){
        console.log('Hello')
    }


};
let adam = new Person('Adam',25,'7ft');


adam.weight=60;
console.log([adam]);


let eve =new Person('Eve',20,'5ft');
console.log([eve]);

console.log(Person.prototype);

Person.prototype.race='Black';
Person.prototype.nationality='Kenyan';
Person.prototype.yearOfBirth=function(){
    let year=new Date().getFullYear();

    let birth=year -this.age;
    console.log(birth)
}
 adam.yearOfBirth();
console.log(adam.race);
console.log(eve.race);

console.log(adam.nationality);
console.log(eve.nationality);
eve.nationality="Ugandan";
console.log([eve]);