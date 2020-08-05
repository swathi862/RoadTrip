# Wanderlust       ![alt text](https://github.com/swathi862/Wanderlust/blob/master/src/components/nav/wanderlust-logo-one.png "Wanderlust Logo")

![alt text](https://github.com/swathi862/Wanderlust/blob/master/src/components/welcome-to-wanderlust.png "Welcome to Wanderlust Logo")

...Wanderlust is a road trip planning application designed to allow a more efficient and centralized process for users to make travel plans using an interactive map.

...This app is for restless adventurers that love taking road trips across the country. However, planning a trip can sometimes be a bit tedious and stressful because there are time and money constraints and it can involve extensive research spanning multiple sites, like accessing maps, getting directions, looking at reviews, calculating costs, and also just building your itinerary from the ground up. With this app, a user can log in to their account and make new travel plans using an interactive map created from an external Mapbox API. After creating a trip, the user can generate details, like approximate gas costs, duration, and mileage, that can be saved alongside their trip data to a personalized page where they can include additional details and build a rough itinerary of their trip. Users can also explore a community database of trips shared by other road trip enthusiasts with their ratings and reviews where they can find inspiration in other users' wanderlust. 

## How to Start the App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Start the app by running npm start in the src folder

Run json-server -p 3000 -w trip.json in api folder

You will also need to start this proxy server in a separate terminal. Follow this [link] for further instructions.
[link]: https://github.com/swathi862/wanderlust-proxy-server 

## Login/Register

...When the user starts the app, the first page they will see is the login/register page prompting them to press one of the two buttons.

...If the user has already registered for an account and is returning to the app, they can select the login button, which will take them to a page where they will prompted for their email and password.

...If they are a first time user, they should register for an account, which will direct them to a page prompting them for a username, email, and password.


## Plan

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### Control Panel & Search
1. Zoom In
    ... On the vertical control panel to the left of the map, the 'zoom in' feature is indicated by the '+' button. Also, you may zoom in using your touchpad by moving your fingers outward. You can zoom in to the map for a closer look at specific cities, landmarks, parks, streets, etc. *You may drag the map around to look at different areas
    + Zoom Out
    ... On the vertical control panel to the left of the map, the 'zoom out' feature is indicated by the '-' button. Also, you may zoom out using your touchpad by moving your fingers inward. You can zoom out on the map, to access broader regions, states, countries, etc.
    *You may drag the map around to look at different areas.
    + Reset North
    ... On the vertical control panel to the left of the map, the 'reset North' feature is not functional with the way the map is set up. Please ignore it
    ... On the vertical control panel to the left of the map, the 'geolocate' feature is the last button on the panel. This button lets the map locate your current location.</List.Item>
    ...On the top right side of the map, you'll find a search bar that takes in input like addresses, cities, or zip codes and returns some results that best match your search text. Once you click on a result, it maps that location on the map for you to further explore. You cannot search coordinates on this search bar- it utilizes reverse geocoding.
    ...Map Markers
    ..*Green Marker- This is the primary marker that you should move around to pinpoint your destinations. ONLY MOVE THIS MARKER AROUND for best results. You need to move this marker at least 2 times ot generate any trip details.
    ..*Red Marker- This marker is merely a placeholder to specify the destination the green marker was previously at.

## Explore

...The 'Explore' page functions as community databse of all of the completed trips that users have voluntarily shared with a rating and review for other adventurers to view and take inspiration from. A user can find trips utilizing the search bar and select a trip view the trip's details and the rating and review left by the user who shared the trip to the page. 
..*By clicking on the 'Details' button on a trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include a rating out of 5 stars and a review submitted by the user who created the trip.
..*By clicking on the "Save to 'My Trips'" button on the 'Details' modal, you can add this trip to your 'My Trips' page, specifically under the 'Future Trips' tab.

## My Trips

...This page saves all the trips the user has selected. The page has two tabs- a 'Future Trips' tab and a 'Completed Trips' tab. All the trips you add to this page will be under the 'Future Trips' tab.

#### My 'Future Trips' tab
...This is where all the trips that you add from the 'Explore' page or a 'Plan' page will appear.
..*By clicking on the 'Details' button of each trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include an 'Edit' and 'Delete' button where you can edit the trip name and description or delete the trip from the page and the database, accordingly.

..*By clicking on the 'Completed' button, you can add this trip to your 'Completed Trips' tab, by marking the trip as completed. The trip will no longer appear under 'Future Trips'.

#### My 'Completed Trips' tab
...This is the tab where all the trips that have been completed will be moved to.
..*By clicking on the 'Details' button of each trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include an 'Edit' and 'Delete' button, where you can edit the trip name and description or delete the trip from the page, accordingly.

⋅⋅*By clicking on the 'Share' button on each trip, you can share this trip with other adventurers, like you! A modal titled, "Share Your Trip with the Community!", will pop up upon clicking this button. The modal will include the trip name and the option to add a rating out of 5 stars and a review. After filling out rating and review to your heart's content, you can click on the 'Share' button to add a copy of the trip to the 'Explore' page. After sharing, the trip will remain on the 'Completed Trips' tab, but will not have a 'Share' button since you've already shared it with the community.
