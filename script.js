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
    if (b == 0) {
        return "÷ by 0 error"
    }
    return a / b;
}

function exponent(a,b) {
    return a ** b;
}

function operate(a, b, sign) {
    if (sign == '+') {
        return add(a, b);
    }
    if (sign == '-') {
        return subtract(a,b);
    }
    if (sign == 'x') {
        return multiply(a,b);
    }
    if (sign == '÷') {
        return divide(a,b);
    }
    if (sign == "^") {
        return exponent(a,b);
    }
}

//updates display when number buttons pressed
//sets variable value
function display(nums) {
    nums.forEach(num => {
        num.addEventListener('click', () => {
            x = x + num.textContent;
            if (po == "") {
                dis.textContent = x;
            } else {
                dis.textContent = y + " " + po + " " + x;
            };
        });
    });
}

//updates display when operand button pressed
//sets operand value
function operand(oper) {
    oper.forEach(op => {
        op.addEventListener('click', () => {
            po = op.textContent;
            dis.textContent = x + ' ' + po;
            y = x;
            x = ''
        });
    });
}

//resets all values
function reset(clear) {
    clear.addEventListener('click', () => {
        dis.textContent = "0"
        x = ''
        y = ''
        po = ''
    })
}

//performs equation when equals button is pressed
function equ(equals) {
    equals.addEventListener('click', () => {
        dis.textContent = operate(+y, +x, po);
    })
}

//technically the second variable during operations
let x = '';
//technically the first variable during operations
let y = '';
//operand
let po = '';


//number buttons
nums = document.querySelectorAll(".num");
//calculator display
dis = document.querySelector(".dis");
//operand
op = document.querySelectorAll(".oper");
//clear
clear = document.querySelector(".AC");
//operations
equals = document.querySelector(".eq");

display(nums);
operand(op);
reset(clear);
equ(equals);




