
//
// function getUser(callback){
//     console.log('getuseriçerisinde')
//
//     setTimeout(()=>{
//         console.log('setTimeout içerisinde');
//         callback({username:"mhemet"});
//     },2000)
// }
//
// getUser((user)=>{
//   console.log("get user calback içiersibde",user)
//     document.body.append(user.username);
// });
//
// console.log("son konsol");



function getUser(callback){

    setTimeout(()=>{
        callback({username:"mhemet"});//data baseden veri geldiğinde gibi düşün
    },2000)
}
function getUserAdresses(username,callback){
    setTimeout(()=>{
       callback(["ankara","mugla","eskisehir"]) ;
    },1000);
}

function getRestaruants(addresses,callback){
    setTimeout(()=>{
        callback(["A restoranti","B restoranti","C restoranti"]);
    },1000)
}

getUser((user)=>{
    getUserAdresses(user.username,(addresses)=>{
        getRestaruants(addresses,(openResturants)=>{
            document.body.append("Acik resturantlar:",openResturants.toString());
        })
    })
});

console.log("son konsol");






