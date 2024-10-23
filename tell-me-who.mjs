// tell-me-who.js

import { readdir } from 'fs/promises';
import { join } from 'path';

const formatName = (fileName) => {
  const [firstName, lastName] = fileName.replace('.json', '').split('_');
  return `${lastName} ${firstName}`;
};

const main = async (directoryPath) => {
  try {
    const files = await readdir(directoryPath);
    const names = files.map(formatName).sort(); // Sort the names alphabetically
    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
  }
};

// Entry point of the script
const dirPath = process.argv[2];
if (dirPath) {
  main(dirPath);
} else {
  console.error('No directory path provided.');
}
