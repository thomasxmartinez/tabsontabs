'use strict';

function Building(floors) {
  this.what = 'building';
  this.floors = floors;
}

Building.prototype.countFloors = function() {
  console.log('I HAVE', this.floors, 'floors');
};
var myHouse = new Building(3);
console.log(myHouse);
myHouse.countFloors();

function LogCabin(rooms) {
  this.building = 'log cabin';
  this.rooms = rooms;
}

LogCabin.prototype.countRooms = function() {
  if (this.rooms > 1) {
    console.log('You can sleep in one of', this.rooms, 'rooms in my', this.building);
  } else {
    console.log('not enough rooms for the both of us');
  }
};

var myLogCabin = new LogCabin(7);
console.log(myLogCabin);
myLogCabin.countRooms();

var urLogCabin = new LogCabin(1);
console.log(urLogCabin);
urLogCabin.countRooms();
