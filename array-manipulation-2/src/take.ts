/* exported take */
function take(array: unknown[], count: number): unknown {
  let result;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === count) {
      const newArr = array[i];
      result = newArr;
    }
  }
  return result;
}
