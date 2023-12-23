async function getWeather() {
    try {
        const response = await fetch('https://wttr.in/Nagoya?format=%C+%t');
        const weatherData = await response.text();

        console.log(`Current weather in Nagoya: ${weatherData}`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();
