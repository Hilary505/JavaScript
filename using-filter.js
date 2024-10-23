/* function that accepts an array of strings and returns only strings that has less than 7 characters */
function filterShortStateName(str) {
  const result = str.filter(name => name.length < 7);
  return result;
}

console.log(filterShortStateName(['hilary','ann','jameiosdt']))

/* function that accepts an array of strings and returns only those that start with a vowel a,e,i,o,u */
function  filterStartVowel(arr) {
    const vowels = ['a','e','i','o','u']
    const result = arr.filter(name => vowels.includes(name[0].toLowerCase()));
    return result;
}

console.log(filterStartVowel(['hilary', 'onion','elephant']));

/* function that accepts an array of strings, and returns only those which contain at least 5 of any vowels */
function filter5Vowels(arr) {
    const vowels = ['a','e','i','o','u'] 
    const result = arr.filter(name => {
        let vowelcount = 0;
        for(let char of name.toLowerCase()) {
            if (vowels.includes(char)) {
                vowelcount++
            }
        }
  return vowelcount >=5
    });
    
    return result;
}

console.log(filter5Vowels(['banananana','omonsho'])) 

/* function that accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u) */
function filter1DistinctVowel(arr) {
    const vowels = new Set(['a','e','i','o','u']) 
    return arr.filter(str => {
        const distinct = new Set (str.toLowerCase().split('').filter(char => vowels.has(char)))
        return distinct.size === 1
    })

}
console.log(filter1DistinctVowel(['hilaary','banana']))

/* function multifilter that accepts an array of objects and returns only those that

    the key capital contains at least 8 characters.
    the key name does not start with a vowel.
    the key tag has at least one vowel.
    the key region is not "South" */

function multiFilter(arr) {
    const vowels = new Set(['a','e','i','o','u']);
    return arr.filter(obj => {
        const { capital, name, tag, region } = obj;
        
        const hasAtLeast8Chars = capital.length >= 8;
        const nameDoesNotStartWithVowel = !vowels.has(name[0].toLowerCase());
        const tagHasVowel = tag.toLowerCase().split('').some(char => vowels.has(char));
        const regionIsNotSouth = region !== "South";
    
        return hasAtLeast8Chars && nameDoesNotStartWithVowel && tagHasVowel && regionIsNotSouth;
      });
}