(async function () {
    let apiPB = [];


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
    let apiPBTemp = [];
    async function evclidGeometry() {
        let rad = Math.PI / 180;
        let r = 6371;
        for (let i = 0; i <= apiPB.devices.length; i++) {
            //let distance = Math.sqrt((+apiPB.devices[i].latitude*Math.PI/180 - userCoords.lat*Math.PI/180) ** 2 + (+apiPB.devices[i].longitude*Math.PI/180 - userCoords.lon*Math.PI/180) ** 2);
            let distance = 2 * r * Math.asin(Math.sqrt(Math.sin((+apiPB.devices[i].latitude * rad - userCoords.lat * rad) / 2)**2 + Math.cos(userCoords.lat * rad) * Math.cos(+apiPB.devices[i].latitude * rad) * Math.sin((+apiPB.devices[i].longitude * rad - userCoords.lon * rad) / 2) ** 2))
            apiPB.devices[i].distance = distance;
            //apiPBTemp.push(distance);
            //console.log(`Расстояние до банкомата: ${distance}`);
        }
    }
    function getMinDistance() {
        console.log(Math.min(...apiPBTemp.devices.distance))
        // apiPBTemp = apiPB.devices.slice(0);
        // apiPBTemp.sort(new Function('x,y', 'return x-y'));
        // console.log(apiPBTemp.slice(0, 5))
    }
    evclidGeometry();
    getMinDistance();
    console.log(apiPB);

    //let distance = Math.sqrt((+apiPB.devices[0].latitude - userCoords.lat) ** 2 + (+apiPB.devices[0].longitude - userCoords.lon) ** 2)
    console.log("Finish");

})()

