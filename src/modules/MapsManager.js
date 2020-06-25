import partyKey from '../appKeys'


export default {
    postDirections(){
        return fetch(`https://api.mapbox.com/directions/v5/mapbox/directions/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${partyKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(data => data.json())
    },
    getDirections(){
        return fetch(`https://api.mapbox.com/directions/v5/mapbox/directions/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${partyKey}`).then(data => data.json())
    }
}

// "coordinates=-84.518641,39.134270;-84.512023,39.102779"