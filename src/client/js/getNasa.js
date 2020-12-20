const { getCred } = require("./getCred")

// Access data from NASA API
const getNasa = async (date)=> {
    const endpoint = `https://api.nasa.gov/planetary/apod?api_key=${getCred()}&date=${date}`;
    const response = await fetch(endpoint);
    const jsonResponse = response.json();

    try {
        console.log(jsonResponse);

        return jsonResponse;

    } catch(e) {
        console.log('error', e);
    }
}

export {getNasa}