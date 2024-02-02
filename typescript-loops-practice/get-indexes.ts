/* exported getIndexes */
function getIndexes(array: string): number[] {
  const index: number[] = [];
  for (let i = 0; i < array.length; i++) {
    index.push(i);
  }
  return index;
}
