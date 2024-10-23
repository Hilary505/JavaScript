function dogYears(nameOfPlanet, ageInSeconds) {

    const  secondsInEarthYear = 31557600;
    const dogYearMultiplier = 7;

    //orbital periods in EarthYears
    const  orbitalPeriods = {
        earth : 1.0,
        mercury : 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };
    // calculate the dogs age in EarthYears

    const earthYears = ageInSeconds / secondsInEarthYear;

    // calculate earthyears in dog years 
const  dogYears = earthYears * dogYearMultiplier;

const planetOrbitalPeriod = orbitalPeriods[nameOfPlanet.toLowerCase()];

if (!planetOrbitalPeriod) {
    throw new Error("Invalid planet name");
}

const planetDogYears = dogYears / planetOrbitalPeriod;

return parseFloat(planetDogYears.toFixed(2));

}

console.log(dogYears('earth',1000000000))