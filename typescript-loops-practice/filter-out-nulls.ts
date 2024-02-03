/* exported filterOutNulls */
function filterOutNulls(values: string[]): string[] {
  const filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
