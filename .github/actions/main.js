'use strict'

const core = require('@actions/core');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const main = async () => {
    try {
        const city = core.getInput('city', { required: true });
        const key = core.getInput('API_KEY', { required: true });
        
        console.log(`The city is ${city} and secret is ${key}`);

        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
        const json = await response.json();
        const temp_c = json.current.temp_c;

        console.log(`The temperature is ${temp_c}°C`);
    }
    catch (err) {
        // setFailed logs the message and sets a failing exit code
        core.setFailed(`Action failed with error ${err}`);
    }
}

main();