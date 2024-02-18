/* exported truncate */
function truncate(length: number, string: string): string {
  let result = '';
  for (let i = 0; i <= string.length; i++) {
    if (i < length) {
      result = result + string[i];
    }
  }
  return result + '...';
}
