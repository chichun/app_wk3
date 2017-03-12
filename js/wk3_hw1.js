//push
let a =[1,2];
console.log(a);
a.push(3,4);
console.log(a);

//slice
let b=['zero','one','two','three'];
let sliced=b.slice(1,3);
console.log(b);
console.log(sliced);

//forEach
var colors = ['red','blue','green'];
for(var i = 0; i < colors.length; i++){
  console.log(colors[i]);
}
colors.forEach(
    (color)=>console.log(color)
);

//use forEach to add HTML elements
$(document).ready(function(){
  colors.forEach(
    (color) => $('body').append(`<div>${color}</div>`)
    );
});

map_1
var numbers=[1,2,3];
var doublenumbers;

doublenumbers=[];
for(var i=0;i<numbers.length;i++){
    doublenumbers.push(numbers[i]*2);
}
console.log(doublenumbers);

doublenumbers=[];
doublenumbers=numbers.map(
    (number)=>number*2
);
console.log(doublenumbers);

//map_2
var cars=[
    {model:'Buick',price:'cheap'},
    {model:'BMW',price:'expensive'}
]
var prices=cars.map((car)=>car.price);
console.log(prices);

//spread operator_1
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [array1,array2];
console.log(array3); //[[1,2,3],[4,5,6]]
let array4 = [...array1, ...array2];
console.log(array4); //[1,2,3,4,5,6]

//spread operator_2
function adder (base, ...numbers) {
  numbers.forEach(function(number){
    console.log(base + number);
  });
}
adder(3,5,7,1);

