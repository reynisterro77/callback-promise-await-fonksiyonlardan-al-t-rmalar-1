
function getUser(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            // reject("Errorr in getUser");
            resolve({username:"mhemet"})//data baseden veri geldiğinde gibi düşün
        },2000)
    });
}
function getUserAdresses(username){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            // reject("Error in getuseradresses");
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
async function displayResturants(){// await en üst seviye olduğu için function içerisine alınır
    try {
        const user=await getUser();
        const addresses=await getUserAdresses(user.username);
        const openResturants=await getRestaruants(addresses);
        document.body.append("Acik resturantlar:",openResturants.toString())
    }catch (error){
        console.log("error içerisinde",error);
    }
}
displayResturants();
console.log("son konsol");














