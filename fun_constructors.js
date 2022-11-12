/*const person = {

    name : 'jeevan',
    age : 21

}

console.log(person);
*/


function person(name,age) {
    
        this.name = name;
        this.age = age;     // prototype methods
};

person.prototype.speak = function (name) {

    this.name = name;
    console.log(`hello my name is ${name}`);
}

const bill = new person('bill',50);  // constructor inherits  protoype methods   // creation of object - new operator is must decalred
console.log(bill.name);
console.log(bill.age);
console.log(bill);
bill.speak('bill');