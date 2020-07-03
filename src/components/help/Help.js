import React, {Component} from 'react'
import { Accordion, Container, List } from 'semantic-ui-react'
import './Help.css'

const MapContent = (
    <Container>
        <List bulleted>
            <List.Item><strong>Control Panel & Search</strong>
                <List.List>
                    <List.Item><u>Zoom In</u>- On the vertical control panel to the left of the map, the 'zoom in' feature is indicated by the '+' button. Also, you may zoom in using your touchpad by moving your fingers outward. You can zoom in to the map for a closer look at specific cities, landmarks, parks, streets, etc. <br/><em>*You may drag the map around to look at different areas</em></List.Item>
                    <List.Item><u>Zoom Out</u>- On the vertical control panel to the left of the map, the 'zoom out' feature is indicated by the '-' button. Also, you may zoom out using your touchpad by moving your fingers inward. You can zoom out on the map, to access broader regions, states, countries, etc.<br/><em>*You may drag the map around to look at different areas</em></List.Item>
                    <List.Item><u>Reset North</u>- On the vertical control panel to the left of the map, the 'reset North' feature is not functional with the way the map is set up. Please ignore it</List.Item>
                    <List.Item><u>Geolocate</u>- On the vertical control panel to the left of the map, the 'geolocate' feature is the last button on the panel. This button lets the map locate your current location.</List.Item>
                    <List.Item><u>Search bar</u>- On the top right side of the map, you'll find a search bar that takes in input like addresses, cities, or zip codes and returns some results that best match your search text. Once you click on a result, it maps that location on the map for you to further explore. You cannot search coordinates on this search bar- it utilizes reverse geocoding.</List.Item>
                </List.List>
            </List.Item>
            <List.Item><strong>Map Markers</strong>
                <List.List>
                    <List.Item><u>Green Marker</u>- This is the primary marker that you should move around to pinpoint your destinations. ONLY MOVE THIS MARKER AROUND for best results. You need to move this marker at least 2 times ot generate any trip details.</List.Item>
                    <List.Item><u>Red Marker</u>- This marker is merely a placeholder to specify the destination the green marker was previously at.</List.Item>
                </List.List>
            </List.Item>
        </List>
    </Container>
)

const TripDetailsContent= (
    <Container>
    <List bulleted>
        <List.Item><strong><u>Name</u></strong>- This is an area for you to input what you would like your trip name to be.</List.Item>
        <List.Item><strong><u>Destination</u></strong>- This is an area for you to input whatever you'd like to. It can be a list of activities you're planning on doing, who you're planning on going on the trip with, when, etc. Personally, I find it best to input a rough summary of your itinerary (i.e. "Salt Lake City,UT to Denver, CO")</List.Item>
        <List.Item><strong><u>Mileage</u></strong>- This is the approximate distance in miles from point A(red marker) to point B(green marker)</List.Item>
        <List.Item><strong><u>Estimated Time</u></strong>- This is the total approximate time you'd be driving for during your trip. Does not take travel stops and detours into consideration</List.Item>
        <List.Item><strong><u>Estimated Cost</u></strong>- This is an estimated cost of gas for your trip using an average gas price of $2.17/gallon</List.Item>
        <List.Item><strong><u>Save Trip</u></strong>- This button allows you to save your trip to your 'My Trips' page, where you'll gain more functionality with what all you can do with your trip. After clicking on the 'Save Trip' button, you'll receive a window alert affirming that your trip has been saved to your 'My Trips' page, specifically under the 'Future Trips' tab.</List.Item>
    </List>
    </Container>
)

const PlanPanels = [
  { key: 'panel-1a', title: 'Navigating the Map', content: {content : MapContent} },
  { key: 'panel-1b', title: 'Trip Details', content: {content: TripDetailsContent} },
]

const PlanContent = (
  <div>
    <Accordion.Accordion panels={PlanPanels} />
  </div>
)

const SearchContent= (
    <Container>
    <List bulleted>
        <List.Item><strong><u>Search</u></strong>- Use the search bar to look for trips by their name.</List.Item>
    </List>
    </Container>
)

const ExploreDetailsContent= (
    <Container>
    <List bulleted>
        <List.Item><strong><u>Details</u></strong>- By clicking on the 'Details' button, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include a rating out of 5 stars and a review submitted by the user who created the trip.</List.Item>
        <List.Item><strong><u>Save to 'My Trips'</u></strong>- By clicking on the "Save to 'My Trips'" button on the 'Details' modal, you can add this trip to your 'My Trips' page, specifically under the 'Future Trips' tab.</List.Item>
    </List>
    </Container>
)

const ExplorePanels = [
  { key: 'panel-2a', title: 'Search', content: {content : SearchContent} },
  { key: 'panel-2b', title: 'Details', content: {content : ExploreDetailsContent} },
]

const ExploreContent = (
  <div>
    This page functions as a community database of all of the trips that users have voluntarily shared for other adventurers to view and take inspiration from.
    <Accordion.Accordion panels={ExplorePanels} />
  </div>
)


const FutureTripsPanels = [
    { key: 'panel-3aa', title: 'Details', content: 'Level 3AA Contents' },
    { key: 'panel-3ab', title: 'Completed', content: 'Level 3AB Contents' },

  ]

const CompletedTripsPanels = [
    { key: 'panel-3ba', title: 'Details', content: 'Level 3BA Contents' },
    { key: 'panel-3bb', title: 'Share', content: 'Level 3BB Contents' },
  ]

const FutureTripsContent = (
    <div>
      <Accordion.Accordion panels={FutureTripsPanels} />
    </div>
)

const CompletedTripsContent = (
    <div>
      <Accordion.Accordion panels={CompletedTripsPanels} />
    </div>
)

const MyTripsPanels = [
    { key: 'panel-3a', title: 'Future Trips', content: {content: FutureTripsContent} },
    { key: 'panel-3b', title: 'Completed Trips', content: { content: CompletedTripsContent} },
  ]
  
  const MyTripsContent = (
    <div>
      <Accordion.Accordion panels={MyTripsPanels} />
    </div>
  )

const rootPanels = [
  { key: 'panel-1', title: 'Plan', content: { content: PlanContent } },
  { key: 'panel-2', title: 'Explore', content: { content: ExploreContent } },
  { key: 'panel-3', title: 'MyTrips', content: { content: MyTripsContent } },
]

class Help extends Component{
    render(){
        return(
            <Container><br/><br/>
                <h1 className="help-title">A Detailed Guide <br/> <small><em>How to use each feature</em></small></h1>
                <Accordion defaultActiveIndex={0} panels={rootPanels} styled  centered/>
            </Container>
        )
    }
} 

export default Help
