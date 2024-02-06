/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === count) {
      const newArr = array.length;
      result.push(newArr);
    }
  }
  return result;
}
