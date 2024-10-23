function pyramid(char, height) {
    let result = "";

    for (let i = 1; i <= height; i++) {
        // Add leading spaces to center the characters
        for (let j = 1; j <= (height - i) * char.length; j++) {
            result += " ";
        }

        // Add characters for the current level of the pyramid
        for (let k = 1; k <= (2 * i - 1); k++) {
            result += char;
        }

        // Add a newline character except after the last row
        if (i < height) {
            result += "\n";
        }
    }

    return result;
}




