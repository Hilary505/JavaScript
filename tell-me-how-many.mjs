import { readdir } from 'fs/promises';
import { resolve } from 'path';

const dirPath = process.argv[2] || process.cwd();

async function countFiles(directory) {
  try {
    const files = await readdir(directory);
    return files.length;
  } catch (error) {
    console.error('Error reading directory:', error);
    return 0; // Return 0 if there's an error (e.g., directory doesn't exist)
  }
}

(async () => {
  const count = await countFiles(resolve(dirPath));
  console.log(count);
})();
