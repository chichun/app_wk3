//callback function_1
function greet(callback){
  console.log('ByeBye!');
  var data = {
    name:'the Fuxk World'
  };
  callback(data);
}

//callback function_2
greet(data => {
  console.log('The callback was invoked!');
  console.log(data);
});