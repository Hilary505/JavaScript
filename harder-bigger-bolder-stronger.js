/* function generateLetters which creates 120 div elements, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased */
export function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;

        // Set font weight based on the current index (i)
        if (i < 40) {
            letter.style.fontWeight = 300;
        } else if (i < 80) {
            letter.style.fontWeight = 400;
        } else {
            letter.style.fontWeight = 600;
        }

        // Only generate uppercase letters 'A' to 'Z'
        letter.textContent = String.fromCharCode(65 + (i % 26));

        document.body.appendChild(letter);
    }
}
