const fetch = require('node-fetch');

async function sunsetTime(date) {
    const resp = await fetch(`http://api.sunrise-sunset.org/json?lat=32.095&lng=34.847&formatted=0&date=${date}`)
    const result = await resp.json();
    return new Date(result.results.sunset);
}

async function *getSunsets() {
    for (let day = 1; day <= 31; day++) {
        yield await sunsetTime('2017-03-' + day);
    }
}

async function main() {
    console.log('Hello Dev.IL 😊 !\n\n');
    for await (let sunset of getSunsets()) {
        console.log('Sunset time for', sunset.toDateString(),
            'is at', sunset.toTimeString());
    }
}

main();
