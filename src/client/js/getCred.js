// To get API credentials from the .env file through the server
const getCred = async ()=>{
    const response = await fetch('http://localhost:4444/cred');
    try {
        const jsonResponse = await response.json();

        return jsonResponse.nasaApiKey;

    } catch(error) {
        console.log('error', error);
    }
}

export {getCred}