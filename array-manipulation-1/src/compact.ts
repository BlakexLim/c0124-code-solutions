/* exported compact */
function compact(array: unknown[]): unknown {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
