# <p align="center"> <img src="https://github.com/swathi862/Wanderlust/blob/master/src/components/nav/wanderlust-logo-one.png" alt="Wanderlust logo"> </p>

Wanderlust is a road trip planning application designed to allow a more efficient and centralized process for users to make travel plans using an interactive map.

This app is for restless adventurers that love taking road trips across the country. However, planning a trip can sometimes be a bit tedious and stressful because there are time and money constraints and it can involve extensive research spanning multiple sites, like accessing maps, getting directions, looking at reviews, calculating costs, and also just building your itinerary from the ground up. With this app, a user can log in to their account and make new travel plans using an interactive map created from an external Mapbox API. After creating a trip, the user can generate details, like approximate gas costs, duration, and mileage, that can be saved alongside their trip data to a personalized page where they can include additional details and build a rough itinerary of their trip. Users can also explore a community database of trips shared by other road trip enthusiasts with their ratings and reviews where they can find inspiration in other users' wanderlust. 

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Home.png "Home page")

## How to Start the App

1. Either fork this repository to create your own local repository or clone it down to run it. 

1. After making sure you are in the `/roadtrip` directory in the terminal (if not, `cd` into it), run `npm install` in the project directory in the terminal to install the necessary packages to allow the app to function properly.

1. Run `json-server -p 5002 -w trip.json` in the project directory's **api** folder in order to initiate the database. These steps will let you run a json server with the trip.json which will allow all of the fetch calls in modules to interact with that data.

1. In a separate terminal window, start the app by running `npm start` which will run the app in the development mode by opening http://localhost:3000 in browser. 

1. You will also need to start a proxy server in a separate terminal. Follow this [link](https://github.com/swathi862/wanderlust-proxy-server) for further instructions.

## Login/Register

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/LoginRegister.png "Login/Register page")

When the user starts the app, the first page they will see is the login/register page prompting them to press one of the two buttons.

+ If the user has already registered for an account and is returning to the app, they can select the login button, which will take them to a page where they will prompted for their email and password.

+ If they are a first time user, they should register for an account, which will direct them to a page prompting them for a username, email, and password.


## Plan

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Plan.png "Plan page")

This is the page where a user can create a trip using an interactive map, generate trip details- trip mileage, duration, and approximate gas cost, personalize the trip with a name and description, and add the trip to their personal **My Trips** page.

#### Navigating the Map: Control Panel & Search
There are tools available on the interactive map to make planning the trip you'd like to go on much easier. 
1. On the vertical control panel, located on the left side of the map, you'll find a zoom in feature (+) and a zoom out feature (-), which will allow you to zoom in and zoom out on the map to present a view detailing more specific landmarks or cities in order to see exact places you'd like to visit.
The control panel also contains a 'Reset North'(won't change map view) and a 'Geolocate' feature- the last button on the panel-which will lets the map locate your current location.
+ You may also use the touchpad to zoom in and out on the map. And you can drag the map around to look at different areas by holding down the left touchpad button.
2. On the top right side of the map, you'll find a search bar that takes in input like addresses, cities, or zip codes and returns some results that best match your search text. Once you click on a result, it maps that location on the map for you to further explore. You cannot search coordinates on this search bar- it utilizes reverse geocoding.
3. You'll find the map markers needed to plot a trip pinned in the center of the United States map. 
+ _Green Marker_- This is the primary marker that you should move around to pinpoint your destinations. ONLY MOVE THIS MARKER AROUND for best results. You need to move this marker at least 2 times ot generate any trip details.
+ _Red Marker_- This marker is merely a placeholder to specify the destination the green marker was previously at.

#### Trip Details
This section is located to the right side of the **Plan** page, beside the map, containing the trip details which will be generated after moving the map marker at least twice to create a trip with a start and end point, as well as, the ability to save the trip to your personal **My Trips** page.
+ The fields that take in user input include _Name_(to give the trip a name) and _Destination_(provides a description of the trip, which can include the start and end points, a list of activities, who you're planning on going on the trip with, when, etc.).
+ The fields generated by moving the markers around are _Mileage_- approximate distance in miles from point A(red marker) to point B(green marker), _Estimated Time_- total approximate driving, and _Estimated Cost_- estimated gas cost. 
        
+ The **_Save Trip_** button allows you to save your trip to your **My Trips** page, where you'll gain more functionality with what all you can do with your trip.

## Explore

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Explore.png "Explore page")

The **Explore** page functions as community databse of all of the completed trips that users have voluntarily shared with a rating and review for other adventurers to view and take inspiration from. A user can find trips utilizing the search bar and select a trip view the trip's details and the rating and review left by the user who shared the trip to the page. 

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Explore%20Modal.png "Explore modal")

+ By clicking on the **_Details_** button on a trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include a rating out of 5 stars and a review submitted by the user who created the trip.
+ By clicking on the **_Save to 'My Trips'_** button on the _Details_ modal, you can add this trip to your **My Trips** page, specifically under the _Future Trips_ tab.

## My Trips

This page saves all the trips the user has selected. The page has two tabs- a _Future Trips_ tab and a _Completed Trips_ tab. All the trips you add to this page will be under the _Future Trips_ tab.

#### My 'Future Trips' tab

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Future%20Trips.png "Future page")

This is where all the trips that you add from the **Explore** page or a **Plan** page will appear.
+ By clicking on the **_Details_** button of each trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include an 'Edit' and 'Delete' button where you can edit the trip name and description or delete the trip from the page and the database, accordingly.

+ By clicking on the **_Completed_** button, you can add this trip to your _Completed Trips_ tab, by marking the trip as completed. The trip will no longer appear under _Future Trips_.

#### My 'Completed Trips' tab

![alt text](https://github.com/swathi862/Wanderlust/blob/master/images/screenshots/Completed%20Trips.png "Completed page")

This is the tab where all the trips that have been completed will be moved to.
+ By clicking on the **_Details_** button of each trip, you can open up a modal that will list the trip name at the top followed by the trip destination, mileage, estimated travel time, and estimated travel cost. The modal will also include an **_Edit_** and **_Delete_** button, where you can edit the trip name and description or delete the trip from the page, accordingly.

+ By clicking on the **_Share_** button on each trip, you can share this trip with other adventurers, like you! A modal titled, _Share Your Trip with the Community!_, will pop up upon clicking this button. The modal will include the trip name and the option to add a rating out of 5 stars and a review. After filling out rating and review to your heart's content, you can click on the **_Share_** button to add a copy of the trip to the **Explore** page. After sharing, the trip will remain on the _Completed Trips_ tab, but will not have a **_Share_** button since you've already shared it with the community.

# Other Notes
This project was built using the following frameworks and tools.
+ [Create React App](https://github.com/facebook/create-react-app)
+ [Semantic UI](https://react.semantic-ui.com/)
+ [Mapbox](https://www.mapbox.com/maps)
