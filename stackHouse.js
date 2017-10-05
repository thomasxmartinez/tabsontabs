'use strict';

var Stack = function() {
  this.storage = '';
};

Stack.prototype.push = function(val) {
  this.storage = this.storage.concat(':', val);
};

Stack.prototype.pop = function(val) {
  var str = this.storage.slice(this.storage.lastIndexOf(':') + 1);
  this.storage = this.storage.substring(0, this.storage.lastIndexOf(':'));
  return str;
};

Stack.prototype.size = function() {
  return this.storage.length;
};

var mySeltzerWater = new Stack();

mySeltzerWater.push('CranberryLime');
mySeltzerWater.push('Coconut');
mySeltzerWater.push('KiwiStrawberry');

console.log(mySeltzerWater.pop());
console.log(mySeltzerWater);
console.log(mySeltzerWater.size());
