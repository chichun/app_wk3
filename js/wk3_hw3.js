var person={
    firstname:'Chi-Chun',
    lastname:'Hsieh',
    greet:function(){
        console.log(`Hello,${this.firstname} ${this.lastname}`);
    }
};
person.greet();
console.log(person['firstname']);

let name,phone;
let info={
    name:name,
    phone:phone,
    printInfo:function(){
        console.log(`Name:${this.name},Phone:${this.phone}`);
    }
}
info.name='dinosour';
info.phone='0912345678';
info.printInfo();