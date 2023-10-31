/**
 * https://learnersbucket.com/examples/interview/html-encoding-of-a-string/
 *
 * input - "Hello World"
 * const styleArr = [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']];
 * output - "<i>He<b>ll</b><u>o W</u></i><b><u>orl</u></b><u>d</u>"
 */

function htmlEncoding(str, styleArr) {
  let output = "";
  let index = 0;
  for (let i = 0; i < styleArr.length; i++) { // TC - O(n)
    const [start, end, style] = styleArr[i];
    // Add the part of the string before the style
    output += str.slice(index, start); // TC - O(k) where k is the length of the substring

    // Add the opening tag
    output += `<${style}>`;

    // Add the styled substring
    output += str.slice(start, end + 1);

    // Add the closing tag
    output += `</${style}>`;
    index = end + 1;
  }

  // Add the remaining part of the string
  output += str.slice(index);
  return output;
}

// TC - O(n*k) = O(n) SC - O(n) why - because we are iterating over the style array only once and we are using an object to store the values

// solve it using reduce
function htmlEncodingReduce(str, styleArr) {
  return styleArr.reduce((acc, [start, end, style]) => {
    const firstPart = acc.slice(0, start);
    const secondPart = acc.slice(start, end + 1);
    const thirdPart = acc.slice(end + 1);
    return `${firstPart}<${style}>${secondPart}</${style}>${thirdPart}`;
  }, str);
}

console.log(
  htmlEncodingReduce("Hello World", [
    [0, 2, "i"],
    [4, 9, "b"],
    [7, 10, "u"],
  ])
);