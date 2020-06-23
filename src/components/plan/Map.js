import React from 'react';
import {Component} from 'react';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import ControlPanel from './control-panel'
import Pin from './pin'
import partyKey from '../../appKeys'
import { Container } from 'react-bootstrap'
import './Map.css'

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

  _onMarkerDragEnd = event => {
    this._logDragEvent('onDragEnd', event);
    this.setState({
      marker: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
    });
  };

  render() {
    return (
        <Container><br/>
            <ReactMapGL
            {...this.state.viewport} mapboxApiAccessToken={partyKey}  mapStyle="mapbox://styles/mapbox/streets-v11"                
            onViewportChange={(viewport) => this.setState({viewport})}
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
        </Container>
    );
  }
}

export default Map
