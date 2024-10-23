/*  a function iswinner which accepts a string representing the name of a country and uses the winners API to return a resolved Promise */
  const  isWinner = async(countryName)  => {
  try {
    // Fetch country details
    const country = await db.getWinner(countryName);
    // Check if the country is from Europe
    if (country.continent !== 'Europe') {
      return `${country.name} is not what we are looking for because of the continent`;
    }
    // Fetch the country's win results
    const results = await db.getResults(country.id);

    if (results.length < 3) {
      return `${country.name} is not what we are looking for because of the number of times it was champion`;
    }
    const years = results.map((result) => result.year).join(', ');
    const scores = results.map((result) => result.score).join(', ');

    return `${country.name} won the FIFA World Cup in ${years} winning by ${scores}`;
  } catch (error) {
    if (error.message === 'Country Not Found') {
      return `${countryName} never was a winner`;
    }
    throw error;
  }
}