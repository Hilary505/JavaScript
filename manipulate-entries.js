/*  function filterEntries that filters using both key and value, passed as an array ([k, v]) */
function filterEntries(cart, callback) {
    return Object.fromEntries(Object.entries(cart).filter(([key, value]) =>  callback([key, value])))
}

/* function mapEntries that changes the key, the value or both, passed as an array ([k, v]) */
function  mapEntries(cart, callback) {
    return Object.fromEntries(Object.entries(cart).map(([key, value]) => callback([key, value])))
}

/* function reduceEntries that reduces the entries passing keys and values as an array ([k, v]) */
function reduceEntries(cart, callback, initialValue) {
  return Object.entries(cart).reduce((acc, [key, value]) => callback(acc, [key, value]), initialValue);
}

/*  function that  will return the total calories of a cart */
function totalCalories(cart) {
  return parseFloat(
    reduceEntries(
      cart,
      (acc, [k, v]) => acc + (nutritionDB[k].calories * v) / 100,
      0
    ).toFixed(1)
  );
}
  

/* function  that  leaves only those items of the cart which have less than 50 grams of carbs after calculating the total amount */
function lowCarbs(cart) {
    return Object.fromEntries(
      Object.entries(cart).filter(([item]) => {
        const carbsPer100g = nutritionDB[item]?.carbs || 0;
        return (carbsPer100g * cart[item]) / 100 < 50;
      })
    );
  } 

  /*   function that will give you the right amount of calories, proteins and so on for each item in your grocery cart */
function cartTotal(cart) {
  return mapEntries(cart, ([item, weight]) => {
    const nutrition = nutritionDB[item];
    if (!nutrition) {
      throw new Error(`Nutrition data for "${item}" not found`);
    }
    
    // Function to round to three decimal places
    const roundToThree = (num) => Math.round(num * 1000) / 1000;

    // Calculate the total for each nutritional fact based on the weight of the item
    const totalNutrition = Object.fromEntries(
      Object.entries(nutrition).map(([key, value]) => [
        key,
        roundToThree((value * weight) / 100) // Rounding to three decimals directly
      ])
    );

    return [item, totalNutrition];
  });
}
