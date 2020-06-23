import React, { Component } from 'react'
import MapsManager from '../../modules/MapsManager'


class Experiment extends Component{

    handleMaps() {
        MapsManager.getMaps()
        .then(()=>{
            console.log("Map is received")
        })
    }

    render(){
        return(
            this.handleMaps()
        )
    }

}

export default Experiment