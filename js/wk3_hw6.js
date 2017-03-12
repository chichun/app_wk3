//function constructor
'use strict'
class Person{
    constructor(name){
        this.name=name;
    }
    printGreeting(){
        console.log(`Hi,I am ${this.name}!!!!!!`);
    }
}

var person1=new Person('Carol');
person1.printGreeting();

var person2=new Person('Cinderalla');
person2.printGreeting();

//extends
class Employee extends Person{
    constructor (name,job){
        super(name);
        this.job=job;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`Hi,I am ${this.name} and I am a ${this.job}!!!!`);

    }
}

var person1=new Employee('Carol','Student');
person1.printGreeting();

var person3=new Person('Maggie');
person3.printGreeting();

//prototype
Person.prototype.printGreeting=function(){
    console.log(`Hi, I am ${this.name}, and i have been changed!!^_^`);

}
person1.printGreeting();
person2.printGreeting();