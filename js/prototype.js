"use strict"


const obj = {
  name: 'Alex',
  sing() {
    console.log('a this ', this);
    const anotherFunc = function() {
      console.log('b this ', this);
    }
    anotherFunc.apply(this);
  }
};

obj.sing();

// const arr = [1, 2, 3]
//
// Array.prototype.map2 = function (callback) {
//   return this.map(callback)
// }
//
// const value = arr.map2(item => item * 2)
//
// console.log(value)
//
//
//
// // arr = ['Y', 'Y'];
//
// Array.prototype.filterMap = function(callback) {
//   return this.map(callback).filter(item => item)
// }
//
// const arr1 = [1, 2, 4, 10, 25].filterMap(value => value > 5 ? 'Y' : undefined);
//
// console.log(arr1)


