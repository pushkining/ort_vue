
let geo = new Object;

(async function(){
let url ="https://filebase.xyz/pbatm/";
setTimeout(async function(){
    let apiPB = await fetch(url);
    apiPB = await apiPB.json();},2000)
    navigator.geolocation.getCurrentPosition(position => {
       geo = position.coords

    },error => {
        console.log(error);
    })
    console.log(apiPB);
    console.log(geo); 
})()


function evclidGeometry(latitude, longitude){

}