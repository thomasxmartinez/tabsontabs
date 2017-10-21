//Scope means where and how you can use the variables you've declared
//if you define a variable inside that function you can only use that in that function
//if you declare a variable outside that function, you can use it globally or anywhere on that page
var printCar = function() {
  var car = 'honda';
  console.log(car);
};

var printMotorCycle = function() {
  var motorcycle = 'kawasaki';
  console.log(motorcycle);
};

printCar();
printMotorCycle();

// we want to write code that has no side effects
//copy console.log(car into the motorcycle function) what happens?
//now remove the var from in front of car
//without var everything is accessible (globally scoped)
//good rule of thumb if it is nested it can probably access parent, if not it probably can't access each other. Unless if/for statement
