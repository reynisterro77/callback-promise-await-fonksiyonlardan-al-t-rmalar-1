

// function testPromise(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Hey Burdayım");
//         },1500);
//     })
// }
//
// console.log("ilk konsol");
//
// testPromise().then((message)=>{
//     console.log("Mesaj geldi",message);
// });
// console.log("son konsol");


//resolve success değerini temsil eder
//reject hatayı
function getUser(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve({username:"mhemet"})//data baseden veri geldiğinde gibi düşün
        },2000)
    });
}
function getUserAdresses(username){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            // reject(new Error("Addresses not found"))
            resolve(["ankara","mugla","eskisehir"]) ;//data baseden veri geldiğinde gibi düşün
        },1000);
    });
}

function getRestaruants(addresses){
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(["A restoranti","B restoranti","C restoranti"]);//data baseden veri geldiğinde gibi düşün
        },1000)
    });
}

//burada catchle rejecti yakalıyoruz

getUser()
    .then((user)=>getUserAdresses(user.username))//get userdan veri gelince
    .then((addresses)=>getRestaruants(addresses))
    .then((openResturants)=>
        document.body.append("Acik resturantlar:",openResturants.toString())
    )
    .catch((error)=>{
            console.log(error);
        });


//errror yapısı
// getUser()
//     .then((user)=>{
//         //..... işlemler
//         //get userdan veri gelince
//         getUserAdresses(user.username).catch((error)=>{
//             console.log("address error",error);
//         });
//     })
//     .then((addresses)=>getRestaruants(addresses))
//     .then((openResturants)=>
//         document.body.append("Acik resturantlar:",openResturants.toString()))
//     .catch((error)=>{
//         console.log(error);
//     });

console.log("son konsol");














