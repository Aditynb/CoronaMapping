function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                //recover=element.recovered;
                if (cases>255){
                    color = "rgb(255, 0, 0)";
                }

               // else if(recover>10)
                //{
                 //   color = "#00FF00";
               // }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }
               

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 