(async function () {
    let apiPB = [];
    // async function getPosition() {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         geo = position.coords 
    //         console.log(geo);
    //      },error => {
    //          console.log(error);
    //      })   
    // }
    for (let y = 0; y > 9; y++) {
        console.log(y);
    }
    function getCoords() {
        /* Создаём и возвращаем Promise, это позволит при вызове функции применить await */
        return new Promise((resolve, reject) => {

            globalThis.navigator.geolocation.getCurrentPosition(successInfo => {
                resolve({
                    lat: successInfo.coords.latitude,
                    lon: successInfo.coords.longitude
                },
                );
            }, failInfo => reject(failInfo))
        });
    }
    let userCoords = await getCoords();
    console.log(userCoords);

    //async function getATM() {
    let url = "https://filebase.xyz/pbatm/";
    apiPB = await fetch(url);
    apiPB = await apiPB.json();
    
    console.log(apiPB.devices)
    // }

    async function evclidGeometry() {
        for await(let i of apiPB.devices) {
            let distance = Math.sqrt((+apiPB.devices[i].latitude - userCoords.lat) ** 2 + (+apiPB.devices[i].longitude - userCoords.lon) ** 2);
            console.log(`Расстояние до банкомата: ${distance}`);
        }
    }
    let dist = await evclidGeometry();
    console.log(dist);
    let distance = Math.sqrt((+apiPB.devices[0].latitude - userCoords.lat) ** 2 + (+apiPB.devices[0].longitude - userCoords.lon) ** 2)
    console.log("Finish", distance);

})()
