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


x = 0;
y = 0;
op = ['+', '-', '*', '/']

