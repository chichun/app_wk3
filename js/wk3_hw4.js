//this
(function(){console.log(this)})();

let person = {
    firstname: 'Carol',
    lastname: 'Hsieh',
    greet1: function(){
        console.log(this);
    },
    greet2: ()=>{
        console.log(this); //undefined
    },
    greet3: function(){
        (()=>console.log(this))();
    }
};

person.greet1();
person.greet2();//undefined
person.greet3();