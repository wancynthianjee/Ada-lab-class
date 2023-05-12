let userDetails= true;

let promise = new Promise(function(resolve,reject){
    if(userDetails){
        setTimeout(()=>{resolve('User details available')},5000);
    
    }
    else{
        setTimeout(()=>{reject('NO user details found')},5000);
    }
});
let add = ()=>{
    console.log(20+30);
}
add();

// async function getUserDetails
const getUserDetails= async()=>{
    let response= await promise;
    console.log({response});
};
getUserDetails();

// let userDetails= true;

// let promise = new Promise(function(resolve,reject){
//     if(userDetails){
//         setTimeout(()=>{resolve('User details available')},5000);
    
//     }
//     else{
//         setTimeout(()=>{reject('NO user details found')},5000);
//     }
// });
// let add = ()=>{
//     console.log(20+30);
// }
// add();

// // async function getUserDetails
// const getUserDetails= async()=>{
//     let response= await promise;
//     console.log({response});
// };
// getUserDetails();