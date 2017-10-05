'use strict';

var Stack = function() {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(val) {
  if (this.count() < this.capacity) {
    this.storage = this.storage[count++] = value;
    return this.count;
  }
  return 'maximum capacity exceeded';
};

Stack.prototype.pop = function(val) {
  if (this.count === 0) {
    return 'no element inside to pop';
  }
  var value = this.storage[--this.count];
  delete this.storage[this.count];
  if (this.count < 0) {
    this.count = 0;
  }
  return value;
};

Stack.prototype.count = function() {
  return this.count;
};

Stack.prototype.peek = function() {
  return this.storage[this.count];
};

var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');
