import fs from 'fs/promises';

// Function to encode file content to base64
async function encodeFile(filePath, outputFile) {
  try {
    const data = await fs.readFile(filePath);
    const base64Data = Buffer.from(data).toString('base64');
    await fs.writeFile(outputFile, base64Data);
    console.log(`File encoded to base64 and saved as ${outputFile}`);
  } catch (error) {
    console.error(`Error encoding file: ${error.message}`);
  }
}

// Function to decode base64 file content
async function decodeFile(filePath, outputFile) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const decodedData = Buffer.from(data, 'base64').toString('utf-8');
    await fs.writeFile(outputFile, decodedData);
    console.log(`File decoded from base64 and saved as ${outputFile}`);
  } catch (error) {
    console.error(`Error decoding file: ${error.message}`);
  }
}

// Main logic to handle command-line arguments
async function main() {
  const [,, filePath, action, newFileName] = process.argv;

  if (!filePath || !action) {
    console.error('Usage: node tell-it-cypher.mjs <file> <encode|decode> [newFileName.extension]');
    process.exit(1);
  }

  // Determine the output file based on provided arguments
  const outputFile = newFileName || (action === 'encode' ? 'cypher.txt' : 'clear.txt');

  if (action === 'encode') {
    await encodeFile(filePath, outputFile);
  } else if (action === 'decode') {
    await decodeFile(filePath, outputFile);
  } else {
    console.error('Invalid action. Use "encode" or "decode".');
  }
}

// Execute the main function
main();