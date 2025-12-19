console.log("Hii");

let arr=[1,2,3,4,5]
// for(let v of arr){
//     console.log(v)
// }

arr.forEach((v,i,a)=>{
    console.log(i+":",v,a)
})

let updateArr=arr.map((v)=>{
    return v*2;
})
console.log(updateArr);

let updateArr1 =arr.map(v=> v*2)
console.log(updateArr);

let filterarr=arr.filter((v)=>{
    return v%2==0
})
console.log(filterarr)

let add=arr.reduce((sum,v)=>{
    return sum+v;
})
console.log(add)

let mult=arr.reduce((mult,v)=>{
    return mult*v
})
console.log(mult);

let numarr=[5,4,23,22,11,-4]
console.log(numarr.sort((a,b)=>{return a-b}))
console.log(numarr.sort((a,b)=>{return b-a}));

let some=numarr.some((v)=>{
    return v%2==0
});
console.log(some)

let value=numarr.every((v)=>{return v>=0});
console.log(value)

let value1=numarr.every((v)=>{return v<=0});
console.log(value1)
console.log(numarr.find((v)=>{return v>11}))
console.log([1,2,[4,5],[6,7]].flat());
console.log([1,2,[4,[7,8]],[6,7]].flat());
console.log([1,2,[4,[7,[8,9]]],[6,7]].flat(3));

//Document Object Module
let h1=document.getElementById("head");
console.log(h1)

let p=document.getElementsByClassName("para");
console.log(p)

let h2=document.getElementsByTagName("h2");
console.log(h2)