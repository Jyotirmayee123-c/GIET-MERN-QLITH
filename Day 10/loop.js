//global level
var a=10;
console.log(a)
{
    console.log(a)
}

function access(){
    console.log(a)
}

//declaration at block level
{
    var b=20;
    console.log(b)
}
console.log(b)

//declaration at function level
function dec(){
    var c=30;
    console.log(c)
}
dec()
console.log(c)

//let keyword
//declaration
//global level

let num=40;
console.log(num)
{
    console.log(num)
}

//block level
{
    let num1=90;
    console.log(num1)
}
// console.log(num1)

//const key word
const fullname="xyz";
console.log(fullname);

{
    const
}

//how you declare a variable
//var
var age;//only deeclaration
console.log(age)

age=30;//only initialization
console.log(age)

var phone=34452666;//both possible

phone=35557223;
console.log(phone)

var phone=5664774;
console.log(phone)

//let
let email;
console.log(email)
email="email@email"
console.log(email)

// let email;
const name='xyz';
console.log(name)
name='yyy'
console.log(name)

//loop
//for loop
for(let i=1;i<=10;i++){
    console.log(i)
}

let idex=1;
while(idex<=5){
    console.log(idex);
    idex++
}

let v=1;
do{
    console.log(v)
    v++
  }while(v<=5);

for(let i=1;i<=10;i++){
    if(i%2==0){
    console.log(i)
    }
}

let your_value=40;
let user_value=prompt("Enter your value");
while(your_value!=user_value){
    console.log("your value is not match");
    user_value=prompt("enter another value");
 }
if(your_value==user_value){
    console.log("your value is matched");
}
 
//number
console.log(typeof 1.4)
console.log(typeof "rakhi")
console.log(typeof false)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof Symbol("$"))
console.log(typeof BigInt(35467732828) )

//object
let obj={
    name:"fghf",
    age:78
}

console.log(obj.name)
console.log(["age"])

let arr=[1,2,3];
console.log(arr[3]);

//for in

for(let key in obj){
    console.log(obj[key])
}
for(let kry in obj){
    console.log(key+":"+obj[key])
}

for(let idx in arr){
    console.log(arr[idx])
}
 for(let v of arr){
    console.log(v)
 }

for(let v of obj){
    console.log(v)
}