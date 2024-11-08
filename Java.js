
function calculateAverage() {
    
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    document.getElementById("result").textContent = `The average of numbers from 1 to 10 is: ${average}`;
}
calculateAverage();


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

let lastTwoDigits = 30;

let matric = factorial(lastTwoDigits);
document.getElementById("matric").textContent= `The factorial of the last two digits of my matric number is: ${matric}`;



function factorial(n) {
    if (n < 0) return null; 
    if (n === 0 || n === 1) return 1; 
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function combination(n, r) {
    if (r > n || n < 0 || r < 0) return 0; 
    return factorial(n) / (factorial(r) * factorial(n - r));
}

function calculateCombination() {
    const x = parseInt(document.getElementById("x").value);
    const y = parseInt(document.getElementById("y").value);
    let condition;

    if (x > y) {
        condition = `C(${x}, ${y}) = ${combination(x, y)}`;
    } else if (y > x) {
        condition = `C(${y}, ${x}) = ${combination(y, x)}`;
    } else if (y === x) {
        condition = `C(${x + 1}, ${y}) = ${combination(x + 1, y)}`;
    } else {
        condition = "Conditions not met for combination calculation.";
    }

    document.getElementById("condition").textContent = condition;
}
calculateCombination()