/* exported filterOutStrings */
function filterOutStrings(values: string[]): unknown[] {
  const filtered = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof '') {
      filtered.push(values[i]);
    }
  }
  return filtered;
}
