var add = function(a, b) {
  return a + b;
};

var math = function(a, b, operate) {
  return operate(a, b);
};

//let's review functions...what will add do?
//okay lets create a function with an anonymous function, pass the operation(anonymous function) into the function and use that to call the other

//how would we call the math function?
//one of the most powerful features of JS is passing functions around like variables

console.log(math(5, 4, add));
