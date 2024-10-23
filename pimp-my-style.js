const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
];

let index = 0; // Tracks the current position in the array
let adding = true; // Flag to know whether to add or remove classes

export function pimp() {
    const button = document.querySelector('.button');

    if (adding) {
        // Add classes one by one
        button.classList.remove('unpimp'); // Ensure 'unpimp' is off while adding classes

        if (index < styles.length) {
            button.classList.add(styles[index]); // Add current style class
            index++; // Move to the next style
        }

        if (index === styles.length) {
            adding = false; // When all styles are added, switch to removing
        }
    } else {
        // Remove classes in reverse order
        index--; // Decrement the index to remove the last added class

        if (index >= 0) {
            button.classList.remove(styles[index]); // Remove the current style class
        }

        button.classList.add('unpimp'); // Toggle 'unpimp' class on

        if (index === 0) {
            adding = true; // Switch back to adding once all classes are removed
            button.classList.remove('unpimp'); // Turn off 'unpimp' after removal is complete
        }
    }
}

// Add an event listener to the document to trigger the pimp function on click
document.addEventListener('click', pimp);