const prom1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task completed');
        resolve();
    },1000);
});

prom1.then(function(){
    console.log("Task resolved");
});


const prom2=new Promise(function(resolve,reject){
    console.log("Promise completed");
    resolve({username:"SHrey112",email:"lalgeshreyas@gmail.com"});
}).then(function(user){
    console.log(user);
})


// const prom3=new Promise(function(resolve,reject){
//    setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"SHrey112",email:"lalgeshreyas@gmail.com"});
//         }else{
//            reject("Something Went wrong"); 
//         }
//    },1000);
// });


// prom3.then(function(user){
    
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("THe promise is either resolved or rejected"));


// const promise4=new Promise(function(resolve,reject){
//     let error=false;
//     if(!error){
//         resolve("Js UP and working");
//     }else{
//         reject("JS failed to work ");
//     }
// });

// async function consumePromiseFive(){
//     try{
//         const aw=await promise4;
//         console.log(aw);
//     }catch(error){
//         console.log(error);
//     }
        
        
// }

// consumePromiseFive();


//lets get data from api in both posible ways

// async function getallusers(){

//     try{
//         const resp=await fetch('https://api.github.com/users');
//         const data= await resp.json();
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
        
//     }
  
// }

// getallusers();

//second way

fetch('https://api.github.com/users')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((errorr)=>{
    console.log(errorr)
})