// https://leetcode.com/problems/evaluate-reverse-polish-notation/
const evalRPN = function (tokens) {
    const stack = [];
    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => Math.trunc(a / b),
    };

    for (const token of tokens) {
        if (token in operations) {
            const num2 = stack.pop();
            const num1 = stack.pop();
            stack.push(operations[token](num1, num2));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};