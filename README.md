# WeatherApp - FitPage Asessment 

## Real-time Weather Forecast API 
Welcome to the **Weather Forecast RESTful API!** This application serves as a backend solution that provides **real-time weather forecasts** based on geographical locations. Leveraging data from a reliable external weather service, the API exposes endpoints allowing users to retrieve accurate and up-to-date weather information for specific locations.
Provide forecasts for parameters like **temperature, humidity, feels like, minimum temperature, maximum temperature.**

The API has several endpoints that let users get weather forecast, such as an endpoint that returns a list of all default locations , an endpoint that returns a weather forecast for specific location provided by user, and user can delete, update and add new location as per his choice.

User has to provide **"city-name"** in **location_id**, like for example /weather/mumbai - to search for weather forecast of Mumbai.

## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches.
  
     http://localhost:3030/
   ![Screenshot 2023-12-14 170936](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/bb651aca-5003-4d73-ad54-4a236c982ae7)

4. **"/locations "** ->  http://localhost:3030/locations

    **(GET)** - Get all locations user has added along with some default locations.
   ![Screenshot 2023-12-14 140551](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/74caddad-6097-4fbc-b574-c9f66c7468b8)


    **(POST)** - User can also add location by providing location_id : "city_name" in body.
![Screenshot 2023-12-14 140806](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/474b3292-d814-4d31-9e47-ea619c120352)

   
6. **"/locations/:location_id "** ->  http://localhost:3030/locations/:location_id
   
   **(GET)** - User can get weather forecast of that location provided in location_id.
![Screenshot 2023-12-14 141018](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/a7ec56aa-91ea-4a95-870f-41614212d968)

   
   **(PUT)** - User can update the location by changing the location_id to city he wants in body.
![Screenshot 2023-12-14 140851](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/03e4ecab-3aab-4de4-8305-7f20992bf7b2)


   **(DELETE)** - User can delete the location.
![Screenshot 2023-12-14 141041](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/2f00760e-8549-409c-8558-3f234f9b6f11)


8. **"/weather/:location_id "** ->    http://localhost:3030/weather/:location_id
 
   **(GET)** - User can get weather forecast of any location provided in ID.
![Screenshot 2023-12-14 140523](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/b49f478f-cf1e-4010-ad2f-0b3237911f5c)


10. **"/history "** ->

   **(GET)** - Get the historical data.


## Application Folder Structure
1. **[controllers/locationcontroller.js]** -> Handle operations related to managing and validating location information.

2. **[controllers/weathercontroller.js]** -> Responsible for fetching weather data for a given location.

3. **[routes/locationroutes.js]** -> Responsible for defining the routes related to locations using the Express Router

4. **[routes/weatherroutes.js]** -> Route for fetching weather information based on a specific location ID.

5. **[/index.js]** ->  For handling requests and responses.To connect and start the server.
   
6. **[src/index.html]** -> The home page for the application.
```
├── controllers
|   ├── locationcontroller.js
|   ├── weathercontroller.js
├── routes
|   ├── locationroutes.js
|   ├── weatherroutes.js
├── src/
│   ├── index.html 
├── index.js
├── {} package-lock.json
└── {}package.json
```

## Installation 

You'll need to have **Node.js** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install**.

Start the server by **nodemon index.js**

## Dependencies
Following dependencie are needed to run this application: 

1. express

2. axios

3. nodemon

4. dotenv
