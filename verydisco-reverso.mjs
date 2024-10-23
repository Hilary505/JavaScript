//verydisco_reverse function  that takes the name of a file reads and deciphers the meaning by reversing  it from verydisco mode 
import {readFile} from 'fs/promises'
const verydisco_reverse = (content) => {
    const parts = content.trim().split(' ');
  
    const reversedParts = parts.map((part) => {
      const mid = Math.floor(part.length / 2);
      const firstHalf = part.slice(0, mid);
      const secondHalf = part.slice(mid);
      return secondHalf + firstHalf;
    });
    return reversedParts.join(' ');
  };

const main = async(fileName) => {
    try {
        const data = await readFile(fileName,'utf8')
        const deciphered = verydisco_reverse(data)
        console.log(deciphered)
    }catch(error) {
        console.error('error reading file',error)
    }
}

const fileName = process.argv[2]
if(!fileName) {
    console.error('please provide a fileName')
    process.exit(1)
}
main(fileName)