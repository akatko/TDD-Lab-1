let vowels =  ["a", "e", "i", "o", "u"];

let translate = (word) => {
    //make word lowercase 
    word = word.toLowerCase();
    if (vowels.includes(word[0])) {
        return word + "way";
    }
    else {
        const index = word.split("").findIndex((letter) => vowels.includes(letter));
        return word.slice(index)+ word.slice(0, index) + "ay";
    }
}

module.exports = translate