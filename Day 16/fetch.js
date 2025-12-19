console.log("Today we are going to learn fetch method")

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         resolve("success")
//     },3000)

// })
// console.log(promise) 

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("hello")
//         reject("reject")
//     },3000)
// })
// console.log(promise1) 

// promise.then((res)=>{
//     console.log(res)

// })
// .catch((res)=>{
//     console.log(res)
// })

// let getData = async()=>{
//     let res= await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data= await res.json()    
//     console.log(data)
// }

// getData()

// let getData = async()=>{
//     let res= await fetch("https://jsonplaceholder.typicode.com/posts")
//     let data= await res.json()    
   
    
// let ul=document.createElement("ul")
// ul.style.cssText="max-width:1024px;margin:auto;display:flex;flex-wrap:wrap;gap:5px;list-style:none"
// data.forEach((obj)=>{
//     let li=document.createElement("li")
//     li.innerText=obj.title
//     li.style.cssText="width:200px;height:200px;box-shadow:2px 2px 5px black; display:flex;justify-content:center;align-items:center"
//     ul.append(li)
// })

// document.body.append(ul)

// }

// getData()

//create request
// let createData = async ()=>{
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//         method:"POST",
//         body:JSON.stringify({
//             name:"xyz",
//             age:30
//         }),
//         headers:{
//             "Content-Type":"application/json"
//         }
//     })
//         let data=await res.json();
//         console.log(data)
//         console.log("successfully data saved")
// }
// createData()

// //update request
// let updateData=async()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method:"PUT",
//     body: JSON.stringify({
//         title:"this is title"
//     }),
//     headers:{
//         "content-type":"application/json"
//     }

// });

//     let data=await res.json();
//     console.log(data)
//     console.log("successfully updated")
// }

// updateData()

//delete data
let deleteData=async()=>{
    let res=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:"DELETE",
    
});

    let data=await res.json();
    console.log(data)
    console.log("successfully deleted")
}

deleteData()