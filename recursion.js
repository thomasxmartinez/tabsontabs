'use strict';

let countDownFrom = num => {
  if (num === 0) {
    return num;
  }
  console.log(num);
  countDownFrom(num - 1);
};

countDownFrom(10);
//recursion is just a function that calls itself until it doesn't
//the most important part of recursion is the basecase breakpoint

// function recursiveFunk(){
//   if(){
//     //basecase
//   }
//   else{
//     //recursiveCase
//   }
// }

function howManyLoops(num) {
  if (num <= 1) {
    return num;
  }
  let count = 0;
  howManyLoops(num - 1);
  count++;
  console.log(num);
}

howManyLoops(5);
