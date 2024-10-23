// Import Node.js file system module
import { promises as fs } from 'fs';
import path from 'path';

// Helper function to print all available commands
function printHelp() {
    console.log(`Commands:
- create: takes a filename as the first argument and creates it (should have .json extension specified)
- delete: takes a filename as the first argument and deletes it
- add: adds an element to the shopping list. If the element exists, increments its count. Requires a third argument for element name and an optional fourth argument for count (defaults to 1).
- rm: removes an element or reduces its count. Requires a third argument for element name and an optional fourth argument for count.
- ls: lists the shopping list in the console.
- help: prints this help menu.`);
}

// Function to read and parse JSON data from the file
async function readList(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        return {};
    }
}
// Function to write data to the JSON file
async function writeList(filename, list) {
    await fs.writeFile(filename, JSON.stringify(list, null, 2), 'utf-8');
}

// Function to create a new file
async function createFile(filename) {
    await fs.writeFile(filename, '{}', 'utf-8');
    console.log(`File '${filename}' created.`);
}

// Function to delete the file
async function deleteFile(filename) {
    try {
        await fs.rm(filename);
        console.log(`File '${filename}' deleted.`);
    } catch (err) {
        console.error('File could not be deleted:', err);
    }
}

// Function to list all elements in the shopping list
async function listItems(filename) {
    const list = await readList(filename);
    if (Object.keys(list).length === 0) {
        console.log('Empty list.');
    } else {
        for (const [item, count] of Object.entries(list)) {
            console.log(`- ${item} (${count})`);
        }
    }
}

// Function to add or update an item in the shopping list
async function addItem(filename, elem, count = 1) {
    if (!elem) {
        return console.error('No elem specified.');
    }

    const list = await readList(filename);
    count = Number(count);

    if (isNaN(count)) {
        count = 1;
    }

    if (list[elem]) {
        list[elem] += count;
    } else {
        list[elem] = count;
    }

    if (list[elem] <= 0) {
        delete list[elem];
    }

    await writeList(filename, list);
    console.log(`${elem} has been added/updated.`);
}

async function removeItem(filename, elem, count) {
    if (!elem) {
        return console.error('No elem specified.');
    }

    const list = await readList(filename);
    
    // Initialize item count to 0 if it doesn't exist
    if (!list[elem]) {
        list[elem] = 0;
    }

    if (count === undefined) {
        delete list[elem]; 
    } else {
        count = Number(count);
        if (isNaN(count)) {
            return console.error('Invalid count specified. It must be a number.');
        }

        if (count < 0) {
            list[elem] += Math.abs(count); 
        } else {
            list[elem] -= count;
            if (list[elem] <= 0) {
                delete list[elem];
            }
        }
    }

    await writeList(filename, list);
    console.log(`${elem} has been removed or updated.`);
}

async function main() {
    const [,, filename, command, elem, count] = process.argv;

    if (!filename || !filename.endsWith('.json')) {
        return console.error('Invalid filename. Please provide a .json file.');
    }

    switch (command) {
        case 'create':
            await createFile(filename);
            break;
        case 'delete':
            await deleteFile(filename);
            break;
        case 'add':
            await addItem(filename, elem, count);
            break;
        case 'rm':
            await removeItem(filename, elem, count);
            break;
        case 'ls':
            await listItems(filename);
            break;
        case 'help':
        default:
            printHelp();
            break;
    }
}

main().catch(err => console.error('An error occurred:', err));
