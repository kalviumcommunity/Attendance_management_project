// NOTE: Replace 'YOUR_API_KEY_HERE' with your actual OpenWeatherMap API key.
const apiKey = 'e7aeabdaeb0cb3223d19096205b9dee0';

/**
 * Fetches weather data for the specified city and displays it.
 * Uses async/await for a cleaner way to handle promises.
 */
async function getWeather() {
    // Get the city name from the input field and clean up whitespace
    const city = document.getElementById('cityInput').value.trim();
    const weatherInfo = document.getElementById('weatherInfo');

    // Check if the API key has been replaced
    if (apiKey === '2e407a36262d29580815058e1ac86ea8') {
        weatherInfo.innerHTML = `<p class="error">Please replace 'YOUR_API_KEY_HERE' with your actual API key.</p>`;
        return;
    }

    // Display a message if the city input is empty
    if (city === '') {
        weatherInfo.innerHTML = `<p class="error">Please enter a city name.</p>`;
        return;
    }

    // Show a loading message while the data is being fetched
    weatherInfo.innerHTML = `<p class="loading">Fetching weather data...</p>`;
    
    // Construct the API URL with the city, API key, and units
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        
        // Handle cases where the city is not found or the API key is invalid
        if (!response.ok) {
            throw new Error("City not found or API key is invalid!");
        }

        const data = await response.json();
        
        // Extract relevant data from the API response
        const { name, main, weather } = data;
        const temperature = main.temp;
        const condition = weather[0].description;
        const iconCode = weather[0].icon;
        
        // Use a more dynamic approach to display the weather icon
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Update the weatherInfo div with the new data
        weatherInfo.innerHTML = `
            <div class="flex flex-col items-center">
                <h2>${name}</h2>
                <img src="${iconUrl}" alt="${condition}" />
                <p>Temperature: ${Math.round(temperature)} °C</p>
                <p>Condition: ${condition.charAt(0).toUpperCase() + condition.slice(1)}</p>
            </div>
        `;
    } catch (error) {
        // Display the error message to the user
        weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    }
}
