/**
 * https://leetcode.com/problems/generate-parentheses/
 * 
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    // open - 0
    // close - 0 // n =3
    const result = [];
    const backTracking = (output, open, close) => {
        // once output is of length 2*n, it means we have valid output
        if (output.length === 2*n) {
            result.push(output);
            return;

        }

        // the opening bracket is starting point, hence keep on adding opening bracket until it is < n
        if (open < n) {
            backTracking(output + '(', open + 1, close);
        }

        // if close < open, we can  add closing bracket
        if (close < open) {
            backTracking(output + ')', open, close + 1);
        }
    }
    // iniital call
    backTracking("", 0, 0);
    return result;
};

// using stack
function generateParentheses(n) {
    const result = [];
    const stack = [{ current: "", open: 0, close: 0 }];

    while (stack.length > 0) {
        const { current, open, close } = stack.pop();

        // If the current combination is valid, store it
        if (current.length === 2 * n) {
            result.push(current);
            continue;
        }

        // Add opening bracket if possible
        if (open < n) {
            stack.push({ current: current + "(", open: open + 1, close });
        }

        // Add closing bracket if possible
        if (close < open) {
            stack.push({ current: current + ")", open, close: close + 1 });
        }
    }

    return result;
}

console.log(generateParentheses(3));
// above is ver slow due to overhead of creating object every tim
