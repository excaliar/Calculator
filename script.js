function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    a / b;
}

function operate(a, b, sign) {
    if (sign == '+') {
        return add(a, b);
    }
    if (sign == '-') {
        return subtract(a,b);
    }
    if (sign == '*') {
        return multiply(a,b);
    }
    if (sign == '/') {
        return divide(a,b);
    }
}

function displayOne(nums) {
    nums.forEach(num => {
        num.addEventListener('click', () => {
            x = x + num.textContent;
            if (+x > 0) {
                dis.textContent = x;
            };
        });
    });
}

let x = '';
let y = '';

//number buttons
nums = document.querySelectorAll(".num");
//calculator display
dis = document.querySelector(".dis");

displayOne(nums);


