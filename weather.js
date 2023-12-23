const city = 'Nagoya';
const api_url = `https://wttr.in/${city}?format=j1`;

async function getWeather() {
    try {
        const response = await fetch(api_url);
        const weather_json = await response.json();
        const temp = weather_json.current_condition[0].temp_C;

        console.log(`Current weather in Nagoya: ${weather_json.current_condition[0].weatherDesc[0].value}`);
        console.log(`Current temperature in Nagoya: ${temp}°C`);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();
