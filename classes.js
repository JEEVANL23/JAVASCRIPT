class person{

    constructor(name,age,childern){

        this.name = name;
        this.age = age;
        this.childern = childern;
    }


speak(name){    

    this.name = name;
    console.log(`hello my name is ${name}, and my age is ${this.age}`);
}

birth(child){

    this.childern.push(child);

}

}

const persondetails = new person('bill',50,['shawn','steph']);
console.log(persondetails);

persondetails.speak('bill');

persondetails.birth('jess');

console.log(persondetails.childern);