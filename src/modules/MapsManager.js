import partyKey from '../appKeys'


export default {
    getDirections(){
    return fetch(`https://api.mapbox.com/directions/v5/mapbox/directions/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${partyKey}`).then(r => r.json())
    }
}