// var personList = 0;

// function Person(name, lastName, age){
//     this.name = name;
//     this.lastName = lastName;
//     this.age = age;
//     personList += 1;
//     this.personCheck = function(){
//         console.log(personList);
//     }
// };

// let v = new Person;
// let b = new Person;

// console.log(v);
// console.log('--------------');
// v.name = "Vytautas";
// b.name = "Bobby";
// console.log(v);
// console.log('--------------');
// Person.prototype.sayHi = function(){
//     console.log('Hello' + ' ' + this.name);
// };
// v.sayHi();
// console.log('---------------');

// function Job(name, lastName, age, job){
//     Person.call(this, name, lastName, age);
//     this.Job = job;
// };

// Job.prototype = Object.create(Person.prototype);

// let teach = new Job;

// console.log(Person);
// Person.perCheck = function(){
//     console.log('This is a prototype method!!' + Person.);
// };

// console.log(v instanceof Person);

// console.log(personList);
// teach.personCheck();


// Example of Call by value
// let a = 12;

// function sum(a,y){
//     a = 10;
//     return a + y;
// };

// console.log(sum(a,10));
// setTimeout(() => {console.log(a)},3000);


// let obj = {
//     user : {
//         name: '  Vytautas Klimavicius  '
//     }
// };

// console.log(obj.user.name);

// function myTest(){
//     let a = 1, b = 2, c = 3;

//     return { 
//         test: 'pfff',
//         run: 'comeon'
//     }
// }

// let result = myTest();

// console.log(result);

// let Person = function(name, lastName){
//     this.name = name;
//     this.lastName = lastName;
// };

// let v = new Person;

// Person.prototype.age = 0;

// console.log(v.__proto__);

// let a = new Person;

// console.log(a);
let a = [1,2,3,4,5];
let leng = a.length;

console.time('loop time 4 with for..of');
// let t0 = performance.now(); // browser
for(let num of a){
    if (num === 4) {
        console.log('found 4');
        break;
    };
}
// let t1 = performance.now(); // browser
// console.log('time :' + (t1 - t0));
 
console.timeEnd('loop time 4 with for..of');

console.time('loop time 4 with for');
for(let i = 0; i < leng; i++){
    if (a[i] === 4) {
        console.log('found 4');
        break;
    };
};
console.timeEnd('loop time 4 with for');


// console.time('loop time 4 with for');
// let leng = a.length;
// let div = leng / 2;
// let abs = div.toPrecision(1);
// if(a[abs - 1] > 4){
//     console.log('To the left is not!');
// } else {
//     console.log('To the right it is!');
// }
// for(let i = 0; i < leng; i++){
//     if  (a[i] === 4) {
//         console.log('found 4');
//         break;
//     };
// };
// console.timeEnd('loop time 4 with for');


// let num = 5 / 2;
// console.log(num.toPrecision(1));



// for(let num of a){
//     if (num === 1) {
//         console.log('found 1');
//         break;
//     };
// }


// let Animal = function(name){
//     this.name = name; 

//     this.sayName = () => {
//         console.log(`Hi ${this.name}`);
//     }
// };

// let dog = new Animal('Dog');

// dog.sayName();


 






















