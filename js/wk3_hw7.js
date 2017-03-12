//JSON
var personbj={
    firstname:"Chi",
    fullname:'',
    age:13,
    married:true,
    hasOwnHair:null,
    children:[{
        firstname:'Terissa'
    },{
        firstname:'Brian'
    }]
};

var personjson=JSON.stringify(personbj);
console.log(personbj);
console.log(personjson);