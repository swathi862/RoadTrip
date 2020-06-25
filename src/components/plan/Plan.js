import React, { Component } from 'react'
import Map from './Map'
import Experiment2 from './Experiment2'
// import Experiment from './Experiment'

class Plan extends Component{
    render(){
        return(
            <>
            <Map />
            {/* <Experiment/> */}
            <Experiment2 />
            </>
        )
    }
}

export default Plan