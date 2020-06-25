import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import partyKey from '../../appKeys'
import ControlPanel from './control-panel'
import Pin from './pin'
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import './Map.css'
import { Container } from 'semantic-ui-react'
// import MapsManager from '../../modules/MapsManager'
// import mapboxgl from 'mapbox.gl'
// import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
// import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [-122.662323, 45.523751], // starting position
// zoom: 12
// });
// // set the bounds of the map
// var bounds = [[-123.069003, 45.395273], [-122.303707, 45.612333]];
// map.setMaxBounds(bounds);

// // initialize the map canvas to interact with later
// var canvas = map.getCanvasContainer();

// // an arbitrary start will always be the same
// // only the end or destination will change
// var start = [-122.662323, 45.523751];

// // create a function to make a directions request
// function getRoute(end) {
// // make a directions request using cycling profile
// // an arbitrary start will always be the same
// // only the end or destination will change
// var start = [-122.662323, 45.523751];
// var url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + {partyKey};

// // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// var req = new XMLHttpRequest();
// req.open('GET', url, true);
// req.onload = function() {
//     var json = JSON.parse(req.response);
//     var data = json.routes[0];
//     var route = data.geometry.coordinates;
//     var geojson = {
//     type: 'Feature',
//     properties: {},
//     geometry: {
//         type: 'LineString',
//         coordinates: route
//     }
//     };
//     // if the route already exists on the map, reset it using setData
//     if (map.getSource('route')) {
//     map.getSource('route').setData(geojson);
//     } else { // otherwise, make a new request
//     map.addLayer({
//         id: 'route',
//         type: 'line',
//         source: {
//         type: 'geojson',
//         data: {
//             type: 'Feature',
//             properties: {},
//             geometry: {
//             type: 'LineString',
//             coordinates: geojson
//             }
//         }
//         },
//         layout: {
//         'line-join': 'round',
//         'line-cap': 'round'
//         },
//         paint: {
//         'line-color': '#3887be',
//         'line-width': 5,
//         'line-opacity': 0.75
//         }
//     });
//     }
//     // add turn instructions here at the end
// };
// req.send();
// }

// map.on('load', function() {
// // make an initial directions request that
// // starts and ends at the same location
// getRoute(start);

// // Add starting point to the map
// map.addLayer({
//     id: 'point',
//     type: 'circle',
//     source: {
//     type: 'geojson',
//     data: {
//         type: 'FeatureCollection',
//         features: [{
//         type: 'Feature',
//         properties: {},
//         geometry: {
//             type: 'Point',
//             coordinates: start
//         }
//         }
//         ]
//     }
//     },
//     paint: {
//     'circle-radius': 10,
//     'circle-color': '#3887be'
//     }
// });
// map.on('click', function(e) {
// var coordsObj = e.lngLat;
// canvas.style.cursor = '';
// var coords = Object.keys(coordsObj).map(function(key) {
//     return coordsObj[key];
// });
// var end = {
//     type: 'FeatureCollection',
//     features: [{
//     type: 'Feature',
//     properties: {},
//     geometry: {
//         type: 'Point',
//         coordinates: coords
//     }
//     }
//     ]
// };
// if (map.getLayer('end')) {
//     map.getSource('end').setData(end);
// } else {
//     map.addLayer({
//     id: 'end',
//     type: 'circle',
//     source: {
//         type: 'geojson',
//         data: {
//         type: 'FeatureCollection',
//         features: [{
//             type: 'Feature',
//             properties: {},
//             geometry: {
//             type: 'Point',
//             coordinates: coords
//             }
//         }]
//         }
//     },
//     paint: {
//         'circle-radius': 10,
//         'circle-color': '#f30'
//     }
//     });
// }
// getRoute(coords);
// });
        // });
// // get the sidebar and add the instructions
// var instructions = document.getElementById('instructions');
// var steps = data.legs[0].steps;

// var tripInstructions = [];
// for (var i = 0; i < steps.length; i++) {
// tripInstructions.push('<br><li>' + steps[i].maneuver.instruction) + '</li>';
// instructions.innerHTML = '<br><span class="duration">Trip duration: ' + Math.floor(data.duration / 60) + ' min 🚴 </span>' + tripInstructions;
// }


const geolocateStyle = {
    position: 'absolute',
    top: 90,
    left: 0,
    margin: 0
  };


//build an array of longitudes and latitudes in control-panel (event?)
//send it into state?
//pass it to each marker?
//getRoutes in this file or in control-panel
class Experiment extends Component {
  state = { 
    viewport :{
        width: 1100,
        height: 500,
        latitude: 39.61730765260464,
        longitude: -98.28462922241255,
        zoom: 3
    },
    marker1: {
        latitude: 29.58657398356344,
        longitude: -95.20845734741465
      },
    events: {},
    searchResultLayer: null
  }

//   componentDidMount() {
//   const map = new mapboxgl.Map({
//     container: this.mapWrapper,
//     style: 'mapbox://styles/mapbox/streets-v10',
//     center: [-73.985664, 40.748514],
//     zoom: 12
//   });
//   const directions = new MapboxDirections({
//     accessToken: mapboxgl.accessToken,
//     unit: 'metric',
//     profile: 'mapbox/driving'
//   });
//   map.addControl(directions, 'top-left');
// }

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  handleOnResult = event => {
    this.setState({
      searchResultLayer: new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      })
    })
  }

  _logDragEvent(name, event) {
    this.setState({
      events: {
        ...this.state.events,
        [name]: event.lngLat
      }
    });
  }

  _onMarkerDragStart = event => {
    this._logDragEvent('onDragStart', event);
  };

  _onMarkerDrag = event => {
    this._logDragEvent('onDrag', event);
  };

  coordinateArray = []
  _onMarkerDragEnd = event => {
    this._logDragEvent('onDragEnd', event);
    this.setState({
      marker1: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };

  getRoute(){
    var start = [];
    var end = [];
    var destination1=[];
    var destination2=[];
  }

    render(){
      const { viewport, searchResultLayer} = this.state
      return (
        <Container><br/>
        {/* <div style={{ height: '100vh'}}> */}
          <ReactMapGL 
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={partyKey}
            >
              <Marker
                longitude={this.state.marker1.longitude}
                latitude={this.state.marker1.latitude}
                offsetTop={-20}
                offsetLeft={-10}
                draggable
                onDragStart={this._onMarkerDragStart}
                onDrag={this._onMarkerDrag}
                onDragEnd={this._onMarkerDragEnd}
              >
                <Pin size={20} />
              </Marker>
              <div className="nav" >
                <NavigationControl onViewportChange={(viewport) => this.setState({viewport})} />
              </div>

              <ControlPanel
                containerComponent={this.props.containerComponent}
                events={this.state.events}
              />
              <GeolocateControl
                style={geolocateStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                />

              <Geocoder 
                mapRef={this.mapRef}
                onResult={this.handleOnResult}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={partyKey}
                position='top-right'
              />
            </ReactMapGL>
            <DeckGL {...viewport} layers={[searchResultLayer]} />
        {/* </div> */}
        </Container>
      )
    }
}

export default Experiment;