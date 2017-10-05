'use strict';

var Queue = function(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(val) {
  if (this.count() < this._capacity) {
    this._storage[this._tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Queue.prototype.dequeue = function(val) {
  var element = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) this.head++;
  return element;
};

Queue.prototype.count = function() {
  return this.tail - this.head;
};

Queue.prototype.peek = function() {
  return this.storage[this.head];
};

Queue.prototype.until = function(value) {
  for (var i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return i - this.head + 1;
  }
  return null;
};

Queue.prototype.contains = function(value) {
  for (var i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return true;
  }
  return false;
};

var mySeltzerWater = new Queue();

mySeltzerWater.enqueue('CranberryLime');
mySeltzerWater.enqueue('Coconut');
mySeltzerWater.enqueue('KiwiStrawberry');

console.log(mySeltzerWater.dequeue());
console.log(mySeltzerWater);

var myQueue = new Queue(3);
console.log(myQueue.enqueue('a'), 'should be 1');
console.log(myQueue.enqueue('b'), 'should be 2');
console.log(myQueue.enqueue('c'), 'should be 3');
console.log(myQueue.enqueue('d'), 'should be Max capacity reached');
console.log(myQueue.dequeue(), 'should be a');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.peek(), 'should be b');
console.log(myQueue.count(), 'should be 2');
console.log(myQueue.contains('b'), 'should be true');
console.log(myQueue.contains('d'), 'should be false');
console.log(myQueue._storage, myQueue._head);
console.log(myQueue.until('b'), 'should be 1');
console.log(myQueue.until('c'), 'should be 2');
console.log(myQueue.until('d'), 'should be null');
