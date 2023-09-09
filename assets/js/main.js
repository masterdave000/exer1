function add() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = num1 + num2;

    const sum = document.getElementById("sum");
    const diff = document.getElementById("difference");
    sum.style.display = "block";
    diff.style.display = "none";
    
    sum.innerHTML = `${num1} + ${num2} = ${result}`;

}

function diff() {
    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);
    const result = num1 - num2;

    const sum = document.getElementById("sum");
    const diff = document.getElementById("difference");
    
    sum.style.display = "none";
    diff.style.display = "block";
    diff.innerHTML = `${num1} - ${num2} = ${result}`;
    
}