# WeatherApp - FitPage Asessment 

## Real-time Weather Forecast API 
Welcome to the **Weather Forecast RESTful API!** This application serves as a backend solution that provides **real-time weather forecasts** based on geographical locations. Leveraging data from a reliable external weather service, the API exposes endpoints allowing users to retrieve accurate and up-to-date weather information for specific locations.
Provide forecasts for parameters like **temperature, humidity, feels like, minimum temperature, maximum temperature.**

The API has several endpoints that let users get weather forecast, such as an endpoint that returns a list of all default locations , an endpoint that returns a weather forecast for specific location provided by user, and user can delete, update and add new location as per his choice.

User has to provide **"city-name"** in **location_id**, like for example /weather/mumbai - to search for weather forecast of Mumbai.

## API Endpoints 
1. **"/ "** -> This default route will render the "index.html file" when the app launches.
  
     http://localhost:3030/
   ![Screenshot 2023-12-14 170936](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/7923db90-3645-4c0f-8768-5bbc5f967261)
4. **"/locations "** ->  http://localhost:3030/locations

    **(GET)** - Get all locations user has added along with some default locations.
   
   ![Screenshot 2023-12-14 140551](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/75a13040-dbb1-4a0f-9377-c0245df47af7)

    **(POST)** - User can also add location by providing location_id : "city_name" in body.
   ![Screenshot 2023-12-14 140806](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/62f37d53-69db-4dc9-bdc0-d196a32739a1)

   
6. **"/locations/:location_id "** ->  http://localhost:3030/locations/:location_id
   
   **(GET)** - User can get weather forecast of that location provided in location_id.
   ![Screenshot 2023-12-14 141018](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/3cd035d9-1416-4417-837d-656079001226)

   
   **(PUT)** - User can update the location by changing the location_id to city he wants in body.
   ![Screenshot 2023-12-14 140851](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/f9429be2-c28c-4181-abc0-e938b1ba3240)


   **(DELETE)** - User can delete the location.
![Screenshot 2023-12-14 141041](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/0adff039-bde3-4ff7-9224-99acdced5516)


8. **"/weather/:location_id "** ->    http://localhost:3030/weather/:location_id
 
   **(GET)** - User can get weather forecast of any location provided in ID.
   ![Screenshot 2023-12-14 140523](https://github.com/parthojha12/WeatherApp-FitPage/assets/112394456/0d214da3-b35f-4f8b-8364-2fff8b4e2a72)


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
