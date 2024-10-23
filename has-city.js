/* function hasCity that takes a string called country and an array of strings, which are cities of that country and  returns a new function */
function hasCity(country, cities) {
    return function(city) {
      if (cities.includes(city)) {
        return `${city} is a city from ${country}`;
      } else {
        return `${city} is not a city from ${country}`;
      }
    };
  }
  