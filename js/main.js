// 1
function printEvenNumbers() {
    const a = parseInt(prompt("Введите начало диапазона (a):"));
    const b = parseInt(prompt("Введите конец диапазона (b):"));

    alert(`Чётные числа от ${a} до ${b}:`);
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            alert(i);
        }
    }
}
printEvenNumbers();

// 2
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// 3
let number;
do {
    number = prompt("Введите число больше 10:", "");
    if (number === null) break;
} while (number !== null && Number(number) <= 10);

// 4
function min(a, b) {
    return a < b ? a : b;
}
alert(min(5, 10)); 
alert(min(15, 3)); 

// 5
const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
};
ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);

// 6
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}

alert(checkAge(15));
