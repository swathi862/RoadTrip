import React, { Component } from 'react'
import Map from './Map'
import PlanDetails from './PlanDetails'
// import Experiment2 from './Experiment2'
// import Experiment from './Experiment'
import { Grid, Container } from 'semantic-ui-react'

class Plan extends Component{
    render(){
        return(
            <>
                <Grid columns={2} divided>
                    <Grid.Row>
                    <Grid.Column >
                        <Container>
                            <Map />
                        </Container>
                    </Grid.Column>
                    <Grid.Column floated='right' width={4}>
                        {/* <PlanDetails /> */}
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            {/* <Experiment/> */}
            {/* <Experiment2 /> */}
            </>
        )
    }
}

export default Plan