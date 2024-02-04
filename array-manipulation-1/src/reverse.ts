/* exported reverse */
function reverse(array: unknown[]): unknown {
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const index = array[i];
    result.push(index);
  }
  return result;
}
