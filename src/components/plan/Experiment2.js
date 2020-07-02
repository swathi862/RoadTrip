import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import React,{ Component } from 'react';
import partyKey from '../../appKeys'
import MapsManager from '../../modules/MapsManager'

 
// // ES5
// var ReactMapboxGl = require('react-mapbox-gl');
// var Layer = ReactMapboxGl.Layer;
// var Feature = ReactMapboxGl.Feature;
 

class Experiment2 extends Component{

    handleFetch=()=>{
        MapsManager.getDirections()
        .then(result => console.log(result))
    }

    componentDidMount(){
        this.handleFetch()
    }

    render(){
        // const Map = ReactMapboxGl({
        //     accessToken:
        //       {partyKey}
        //   });
       
        return(
            <></>
        //     <Map
        //     mapStyle="mapbox://styles/mapbox/streets-v11"
        //     containerStyle={{
        //       height: '100vh',
        //       width: '100vw'
        //     }}
        //   >
        //     <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        //       <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        //     </Layer>
        //   </Map>
            
        )

    } 
}

export default Experiment2
