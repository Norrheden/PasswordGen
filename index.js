let pElement = document.querySelector("p")

let askLetters = prompt("How many letters");
Number(askLetters);

let randIndex;

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


function minMaxRand(min, max) {
    return min + Math.floor((max + 1 - min) * Math.random());
}
