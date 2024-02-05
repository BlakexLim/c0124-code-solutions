/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= count) {
      result.push(array[i]);
    }
  }
  return result;
}
