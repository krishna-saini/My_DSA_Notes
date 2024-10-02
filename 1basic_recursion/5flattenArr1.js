const flattenArray = (inputArray) => {
  if (!Array.isArray(inputArray)) {
    return 'Error: Input is not an array';
  }
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (typeof inputArray[i] === 'number') {
      result.push(inputArray[i]);
    } else {
      const flattenedSubArray = flattenArray(inputArray[i]);
      result.push(...flattenedSubArray);
    }
  }
  return result;
};

console.log(flattenArray([[[[1], [[[2, 5]]], [[[[[[[3]]]]]]]]]]));
