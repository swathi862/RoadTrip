import partyKey from '../appKeys'
import { data } from 'jquery'

const remoteURL = 'http://localhost:6060/api/directions/'

export default {
    postDirections(){
        return fetch(`${remoteURL}-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${partyKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then(data => data.json())
    },
    getDirections(coordinateArray){
        return fetch(`${remoteURL}-73.9922450132669%2C40.733682298856394%3B-73.98669079595648%2C40.73395036920388%3B-73.98772380962203%2C40.73259928365695%3B-73.9889407846248%2C40.73310862468372?alternatives=true&geometries=geojson&steps=true&access_token=${partyKey}`).then(data => data.json())
    }
}

// "coordinates=-84.518641,39.134270;-84.512023,39.102779"