This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Wanderlust
...Wanderlust is a road trip planning application designed to allow a more efficient and centralized process for users to make travel plans using an interactive map.

...This app is for restless adventurers that love taking road trips across the country. However, planning a trip can sometimes be a bit tedious and stressful because there are time and money constraints and it can involve extensive research spanning multiple sites, like accessing maps, getting directions, looking at reviews, calculating costs, and also just building your itinerary from the ground up. With this app, a user can log in to their account and make new travel plans using an interactive map created from an external Mapbox API. After creating a trip, the user can generate details, like approximate gas costs, duration, and mileage, that can be saved alongside their trip data to a personalized page where they can include additional details and build a rough itinerary of their trip. Users can also explore a community database of trips shared by other road trip enthusiasts with their ratings and reviews where they can find inspiration in other users' wanderlust. 

## Plan

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Control Panel & Search
    + Zoom In
    ... On the vertical control panel to the left of the map, the 'zoom in' feature is indicated by the '+' button. Also, you may zoom in using your touchpad by moving your fingers outward. You can zoom in to the map for a closer look at specific cities, landmarks, parks, streets, etc. *You may drag the map around to look at different areas
    + Zoom Out
    ... On the vertical control panel to the left of the map, the 'zoom out' feature is indicated by the '-' button. Also, you may zoom out using your touchpad by moving your fingers inward. You can zoom out on the map, to access broader regions, states, countries, etc.
    *You may drag the map around to look at different areas.
    + Reset North
    ... On the vertical control panel to the left of the map, the 'reset North' feature is not functional with the way the map is set up. Please ignore it
                    <List.Item><u>Geolocate</u>- On the vertical control panel to the left of the map, the 'geolocate' feature is the last button on the panel. This button lets the map locate your current location.</List.Item>
                    <List.Item><u>Search bar</u>- On the top right side of the map, you'll find a search bar that takes in input like addresses, cities, or zip codes and returns some results that best match your search text. Once you click on a result, it maps that location on the map for you to further explore. You cannot search coordinates on this search bar- it utilizes reverse geocoding.
                Map Markers
                    Green Marker</u>- This is the primary marker that you should move around to pinpoint your destinations. ONLY MOVE THIS MARKER AROUND for best results. You need to move this marker at least 2 times ot generate any trip details.
                    Red Marker</u>- This marker is merely a placeholder to specify the destination the green marker was previously at.

## Explore

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## My Trips

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
