import React from 'react';
import {Component} from 'react';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import ControlPanel from './control-panel'
import Pin from './pin'
import partyKey from '../../appKeys'
import { Grid,Container } from 'semantic-ui-react'
import './Map.css'
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import "mapbox-gl/dist/mapbox-gl.css"
import PlanDetails from './PlanDetails'
import MapsManager from '../../modules/MapsManager'
// import { lineString } from '@turf/helpers';



const geolocateStyle = {
  position: 'absolute',
  top: 90,
  left: 0,
  margin: 0
};

class Map extends Component {

  state = {
    viewport: {
      width: 1000,
      height: 500,
      latitude: 39.61730765260464,
      longitude: -98.28462922241255,
      zoom: 3
    },
    searchResultLayer: null,
    marker1: {
      latitude: 39.75042544661048,
      longitude:  -97.75039720667868
    },
    marker2: {
      latitude: 39.75042544661048,
      longitude:  -97.75039720667868
    },
    events: {},
    coordinateArray: [],
    mileage: 0,
    duration: 0
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

  _onMarkerDragStart = event => {
    this._logDragEvent('onDragStart', event);
    this.setState({
      marker1: {
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      }
  });
}

  _onMarkerDrag = event => {
    this._logDragEvent('onDrag', event);
  };

  
  _onMarkerDragEnd = event => {
    const copyOfCoordinateArray = this.state.coordinateArray
    const coordinate ={
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    }
    copyOfCoordinateArray.push(coordinate)

    this._logDragEvent('onDragEnd', event);
    this.setState({
      marker2: coordinate,
      coordinateArray: copyOfCoordinateArray
    });
    console.log(this.state.coordinateArray)
    if (this.state.coordinateArray.length >= 2){
      MapsManager.getDirections(this.state.coordinateArray)
        .then(result => {

        this.setState({
            mileage: (result.routes[0].distance)/1609,
            duration: (result.routes[0].duration)/60,
        })
        })
    
  };
  }

  getData = () => {
    MapsManager.getDirections(this.state.coordinateArray)
        .then(result => {

        this.setState({
            mileage: (result.routes[0].distance)/1609,
            duration: (result.routes[0].duration)/60,
        })
        })
  }



  render() {
    const { viewport, searchResultLayer} = this.state
    return (
      <>
      <Grid columns={2} divided>
        <Grid.Row>
        <Grid.Column >
        <Container>
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
                // events={this.state.events}
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
        </Container>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          {/* <PlanDetails coordinate1 = {this.state.marker1} coordinate2 = {this.state.marker2}/> */}
          {/* {this.state.coordinateArray >= 2 ? <PlanDetails mileage={this.state.mileage} duration={this.state.duration} {...this.props}/>: ""} */}
          <PlanDetails mileage={this.state.mileage} duration={this.state.duration} />
          {/* <PlanDetails coordinates={this.coordinateArray.slice(-2)} /> */}
        </Grid.Column>
        </Grid.Row>
      </Grid>
      </>
    );
  }
}

export default Map
