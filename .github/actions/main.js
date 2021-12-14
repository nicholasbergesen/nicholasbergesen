'use strict'

import core from '@actions/core';
import fetch from "node-fetch";

const main = () => {
    try {
        const city = core.getInput('city', { required: true });
        const key = core.getInput('API_KEY', { required: true });
        
        console.log(`The city is ${city} and secret is ${key}`);

        let tempC = fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(json => json.current.temp_c);

        console.log(`The temperature is ${tempC}°C`);
    }
    catch (err) {
        // setFailed logs the message and sets a failing exit code
        core.setFailed(`Action failed with error ${err}`);
    }
}

export default main;