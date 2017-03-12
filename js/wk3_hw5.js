//bind_1
var person={
    firstname:'Carol',
    lastname:'Hsieh',
    getFullName:function(){
        var fullname=this.firstname+' '+this.lastname;
        return fullname;
    }
}

var logName=function(){
    console.log('logged: '+this.getFullName());
}
var logPersonName=logName.bind(person);
logPersonName();

//bind_2
let greet=function(fn){
    fn();
};

let person2={
    name2:'Carol',
    hello:function(){
        console.log(`Hello ${this.name2}`);
    },
    sayHello:function(){
        greet(this.hello.bind(this));
    }
};

person2.sayHello();

//bind_3
let greet2 =function(fn){
    fn();
};
let newPerson={
    name3:'Chi',
    sayhello:function(){
        greet2(
            ()=>console.log(`Hello ${this.name3}`)
            );
        }
}
newPerson.sayhello();