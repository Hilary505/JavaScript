// verydisco.mjs script 
const  input  = process.argv[2]
const  veryDisco = (word) => {
    const halfLength = Math.ceil(word.length/2)
    const firstHalf = word.slice(0, halfLength)
    const secondHalf = word.slice(halfLength)
    return  `${secondHalf + firstHalf}`
}
const output = input.split(' ').map(veryDisco).join(' ')
console.log(output)