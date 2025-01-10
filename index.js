let pElement = document.querySelector("p")

let askLetters = prompt("How many letters");
Number(askLetters);

let askSymbols = prompt("How many symbols");

let randIndex;
let randIndexOfArray;


for(let i = 0; i< askLetters; i++) {
    randIndex = minMaxRand(0, letters.length - 1)
    let letter = letters[randIndex];
    if (Math.random() > 0.5) {
        letter = letter.toUpperCase();
        pElement.textContent += `${letter}`
    } else {
        pElement.textContent += `${letter}`

    }
}
let arrayOfLetters = pElement.textContent.split("")

for(let i = 0; i < askSymbols; i++) {
    randIndexOfArray = minMaxRand(0, arrayOfLetters.length);
    randIndex = minMaxRand(0, symbols.length - 1)
    arrayOfLetters.splice(randIndexOfArray, 0, `${symbols[randIndex]}`)


}

let password = arrayOfLetters.join("")
pElement.textContent = `${password}`




function minMaxRand(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random());
}
