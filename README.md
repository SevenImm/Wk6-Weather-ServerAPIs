# Wk6-Weather-ServerAPIs
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
# Acceptance Criteria:
- GIVEN a weather dashboard with form inputs.
- WHEN I search for a city.
- THEN I am presented with current and future conditions for that city and that city is added to the search history.
- WHEN I view current weather conditions for that city.
- THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed.
- WHEN I view future weather conditions for that city.
- THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity.
- WHEN I click on a city in the search history.
- THEN I am again presented with current and future conditions for that city.

## Feature/Body:
For this feature branch, I want to build the main body of the weather dashboard.
I want to recreate the body using bootstrap.

## Feature/Scripts:
For this branch, I want to build the logic script to call the API and get the weather.
# Feature/ScriptsV.1:
For this commit, I want to check/store cities into local storage.
- Check **if** user has previously looked for cities before.
- **IF** no object is stored, then proceed the function of adding the city into the object.
(In this case I manually added the data in, since the event listeners/function has not been written.)
# Feature/ScriptsV.2:
For this commit, I want to start the fetch functionality.
- The user starts by writing the desired city into input box.
- The user press the lookup button. 
- The fetch function is initialized with user input (city).
+ Added the data into main body
# Feature/ScriptsV.3:
For this commit, I want to append all fetched data into the HTML:
- When user repeats the process from the previous commits now:
- The data forecast for 5 days will get stored,
- This data will be formated, 
- This data will be styled,
- This data will be display into the HTML. (Appended)

# Screenshots:
## Feature/Body:
![Alt text](/assets/progress/Body.png)
## Feature/Scripts v.1 + v.2:
![Alt text](/assets/progress/Version2.png)
## Feature/ScriptsV3:
![Alt text](/assets/progress/ScriptV3.png)