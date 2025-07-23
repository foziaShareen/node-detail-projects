//there are three ways to handle files in Node.js
//1. Synchronous API
//2. callback API
//3. Promise API
// PROMISE API is the best way to handle files in Node.js
// const fs = require('fs/promises');
// (async()=>{
//     try{
//         await fs.copyFile('original1.txt','copied-promise.txt')

//     }
//     catch(err){
//         console.error('Error:', err);
//     }
// })()
//call back API
// const fs = require('fs');
// fs.copyFile('original2.txt','copied-callback.txt',(err)=>{
//     if(err){
//         console.error('Error:', err);
//     } else {
//         console.log('File copied successfully');
//     }   
// }   )
// Synchronous API
const fs = require('fs');
fs.copyFileSync('original3.txt','copied-synchronous.txt');