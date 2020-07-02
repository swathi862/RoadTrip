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
        // var coordinates1 = Object.values(coordinateObject1)
        // var coordinates2 = Object.values(coordinateObject2)
        // console.log(`${remoteURL}${coordinates2[1]},${coordinates2[0]};${coordinates1[1]},${coordinates1[0]}?alternatives=true&geometries=geojson&steps=true&access_token=${partyKey}`)
        var coordinates1 = Object.values(coordinateArray[coordinateArray.length-1])
        var coordinates2 = Object.values(coordinateArray[coordinateArray.length-2])
        console.log(`${remoteURL}${coordinates2[0]},${coordinates2[1]};${coordinates1[0]},${coordinates1[1]}?alternatives=true&geometries=geojson&steps=true&access_token=${partyKey}`)
        return fetch(`${remoteURL}${coordinates2[0]},${coordinates2[1]};${coordinates1[0]},${coordinates1[1]}?alternatives=true&geometries=geojson&steps=true&access_token=${partyKey}`).then(data => data.json())
    }
}
