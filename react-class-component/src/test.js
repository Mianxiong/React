// var a = {
//   name: "里面的name",
//   sayName: function () {
//     console.log("this.name = " + this.name);
//   },
// };
// var name = "外面的name";
// function sayName() {
//   var sss = a.sayName;
//   sss();//sss.call(undefined)  this是undefined
//   a.sayName();//a.sayName.call(a)  this是a
//   (a.sayName)();//(a.sayName).call(a)  this是a
//   (b = a.sayName)();//b.call(undefined)  this是undefined
// }
// sayName();

// var length = 10;
// function fn() {
//     console.log(this.length)
// }
// var obj = {
//     length: 5,
//     method: function(fn) {
//         console.log('fn',fn)
//         console.log('arguments[0]',arguments[0])
//         fn();//fn.call(undefined) this是undefined
//         arguments[0]();// arguments[0].call(arguments) this是arguments,也就是[fn,1]    
//     }
// }
// obj.method(fn,1);//obj.method.call(obj,fn,1) this是obj,arguments是[fn,1]
let person = { name: 'hmx', sayHi() { return ()=>console.log('this',this)}}  
console.log((person.sayHi())())
