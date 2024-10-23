const citiesOnly = cities => (cities.map(name => name.city))

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]) // -> ['Los Angeles', 'San Francisco']
  
)

function upperCasingStates(states) {
  return states.map((state) => {
    return  state
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
  });
}

console.log(upperCasingStates(['alabama', 'new jersey'])) // ['Alabama', 'New Jersey'] 

function fahrenheitToCelsius(fahrenheit) {

 return fahrenheit.map(element => {
  const fahrenheit = parseFloat(element);
  const celsius = Math.floor((fahrenheit-32) * (5/9))
  return `${celsius}°C`
 });
}

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))  

const trimTemp = (arr) => {
  return arr.map((item) => {
  item.temperature = item.temperature.replaceAll(" ", "");
  return item;
  });
  }

console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
  { city: 'San Francisco', temperature: ' -4 ° F   ' },
]) /* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */
)

const tempForecasts = (arr) => {
  return arr.map((item) => {
  return `${Math.floor(
  (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
  ).toString() + "°Celsius"
  } in ${item.city}, ${item.state
  .split(" ")
  .map((word) => {
  return word[0].toUpperCase() + word.slice(1);
  })
  .join(" ")}`;
  });
  }