// verydisco-forever function that works similar to verydisco  but  write the output into verydisco-forever.txt file 
import fs from 'node:fs/promises'
const input = process.argv[2]

const   verydisco_forever = (word) => {
    const  halfLength = Math.ceil(word.length/2)
    const  firstPart =  word.slice(0, halfLength)  
    const secondPart =  word.slice(halfLength)

    return `${secondPart +  firstPart}`
}

const execute = async () => {
    try {
        const output = input.split(' ').map(verydisco_forever).join(' ');
        await fs.writeFile('verydisco-forever.txt', output);
        console.log('Saved to verydisco-forever.txt!');
    } catch (err) {
        console.error('Error writing file:', err);
    }
};

execute();  