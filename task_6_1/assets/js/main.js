(async function () {
    //let apiPB = [];


    function getCoords() {
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
    let apiPB = await fetch(url);
    apiPB = await apiPB.json();
    // }
    //let apiPBTemp = [];

    async function evclidGeometry() {
        let rad = Math.PI / 180;
        let r = 6371;
        for (let i = 0; i <= apiPB.devices.length; i++) {
            //let distance = Math.sqrt((+apiPB.devices[i].latitude*rad - userCoords.lon*rad) ** 2 + (+apiPB.devices[i].longitude*rad - userCoords.lat*rad) ** 2);
            let distance = 2 * r * Math.asin(Math.sqrt(Math.sin(((+apiPB.devices[i].latitude * rad - userCoords.lat * rad) / 2)) ** 2 + Math.cos(userCoords.lat * rad) * Math.cos(+apiPB.devices[i].latitude * rad) * Math.sin(((+apiPB.devices[i].longitude * rad - userCoords.lon * rad) / 2)) ** 2))
            apiPB.devices[i].distance = distance;
            //apiPBTemp.push(distance);
        }
    }
    
    async function getMinDistance() {
        //apiPBTemp = apiPB.devices.slice();        
        apiPB.devices.sort((a, b) => {
            apiPB.devices[a].distance - apiPB.devices[b].distance
        });
        
        console.log(apiPB.slice(0, 5));
    }
    console.log(apiPB);
    console.log(apiPB.devices[202].distance);
    
    evclidGeometry();
    getMinDistance();
    //console.log(apiPB);

    
    console.log("Finish");

})()