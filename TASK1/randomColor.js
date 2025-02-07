let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

function randomColor() {
    let hexColor = randomCombinations(6, hex);
    document.body.style.backgroundColor = '#' + hexColor;
}

function randomCombinations(length, array) {
    let comb = '';
    let min = 0;
    let max = array.length - 1;

    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        comb += array[randomNum];
    }
    return comb;
}

