'use strict';

var myObject = {
    // определим геттер для `a`
    get a() {
        return this.www;
    },
    // определим сеттер для `a`
    set a(val) {
        console.log(this.www)
        this.www = val * 2;
    }
};
myObject.a = 2;
console.log(myObject.a);



// const object = {
//     someValue: '1'
// }
//
// Object.defineProperty(object, "secondValue",  {
//     value: '2',
//     writable: true,
//     enumerable: true,
//     configurable: false
// })
//
// Object.defineProperty(object, "secondValue",  {
//     enumerable: false,
// })
//
// console.log(object)