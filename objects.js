// in javascript everything is an object
var person = {
  firstName: 'Thomas',
  lastName: 'Martinez',
  hello: function() {
    return 'hello, my name is ' + this.firstName + ' ' + this.lastName;
  },
  interests: {
    athletic: ['football', 'basketball', 'golf'],
    musical: ['hip-hop', 'trap', 'jazz']
  } // notice there is no trailing comma after the last portion of the object
};

console.log(person.hello());
//person is the object firstName and lastName are properties
//hello is a method (a property that is a function)

//to acess properties of an object
person.firstName; //'Thomas'
person.lastName; //'Martinez'

//ask how do we access the function call--
person.hello();

person['firstName']; //'Thomas'
person['lastName']; //'Martinez'
person['hello']();

//what will person['interests']['musical'][1] return?
//what will person.interests.musical[1] return?
var prop = 'firstName';
person[prop];

//what does 'this' mean? whatever I am next to whatever I am in. What this means depends on what context the this comes from.
//bracket notation, dot notation

var dog = {};

dog.breed = 'golden retriever';
console.log(dog);

//what will dog.breed return?
