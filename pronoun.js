// function  named pronoun that accepts a string as parameter 
//the functions returns an object that will have all personal pronouns
function pronoun(input) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = input.split(/\s+/);
    const result = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase().replace(/[^a-z]/g, '');
        if (pronouns.includes(word)) {
            if (!result[word]) {
                result[word] = { word: [], count: 0 };
            }
            result[word].count++;
            if (words[i + 1]) {
                const nextWord = words[i + 1].toLowerCase().replace(/[^a-z]/g, ''); 
                if (nextWord && !pronouns.includes(nextWord)) {
                    result[word].word.push(nextWord);
                }
            }
        }
    }
    return result;
}
