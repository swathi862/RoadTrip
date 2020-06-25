import React from 'react';
import {Component} from 'react';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import ControlPanel from './control-panel'
import Pin from './pin'
import partyKey from '../../appKeys'
import { Container } from 'semantic-ui-react'
import './Map.css'
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"



const geolocateStyle = {
  position: 'absolute',
  top: 90,
  left: 0,
  margin: 0
};

// let self =  this

// mapbox.getDirections([
//     start,
//     end
//   ], {
//     profile: 'mapbox.driving',
//     instructions: 'html',
//     alternatives: false,
//     geometry: 'geojson'
// }).then(function(results) {
//   let { origin, destination, routes } = results
//   self.setState({
//     directions: routes[0].geometry.coordinates
//   })
// }) 
class Map extends Component {

  state = {
    viewport: {
      width: 1100,
      height: 500,
      latitude: 39.61730765260464,
      longitude: -98.28462922241255,
      zoom: 3
    },
    searchResultLayer: null,
    marker1: {
      latitude: 29.58657398356344,
      longitude: -95.20845734741465
    },
    marker2: {
      latitude: 29.58657398356344,
      longitude: -95.20845734741465
    },
    events: {}
  };

  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

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

  coordinateArray =[]
  _onMarkerDragStart = event => {
    this._logDragEvent('onDragStart', event);
    this.setState({
      marker1: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
  });
  // this.coordinateArray.push(this.state.marker1)
  // console.log(this.coordinateArray)
}

  _onMarkerDrag = event => {
    this._logDragEvent('onDrag', event);
  };

  _onMarkerDragEnd = event => {
    this._logDragEvent('onDragEnd', event);
    this.setState({
      marker2: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
    this.coordinateArray.push(this.state.marker2)
    console.log(this.coordinateArray)
  };



  render() {
    const { viewport, searchResultLayer} = this.state
    return (
        <Container><br/>
            <ReactMapGL
            ref={this.mapRef}
            {...this.state.viewport} mapboxApiAccessToken={partyKey}  mapStyle="mapbox://styles/mapbox/streets-v11"                
            // onViewportChange={(viewport) => this.setState({viewport})}
            onViewportChange={this.handleViewportChange}
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

              <Marker
                longitude={this.state.marker2.longitude}
                latitude={this.state.marker2.latitude}
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

              {/* {
                this.state.directions && (
                  <Layer
                    type="line"
                    layout={{ "line-cap": "round", "line-join": "round" }}
                    paint={{ "line-color": "#4790E5", "line-width": 12 }}>
                    <Feature coordinates={this.state.directions}/>
                  </Layer>
                )
              } */}
            </ReactMapGL>
            {/* <Marker latitude= {29.58657398356344} longitude= {-95.20845734741465}>
                <button className="map-marker">
                    <img src="/map-pin.png" alt="pinpoint"/>
                </button>
            </Marker> */}
            <DeckGL {...viewport} layers={[searchResultLayer]} />

        </Container>
    );
  }
}

export default Map
