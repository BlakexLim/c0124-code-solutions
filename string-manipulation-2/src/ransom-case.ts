/* exported ransomCase */
function ransomCase(string: string): string {
  const lowerCase = string.toLowerCase();
  const result: string[] = [];
  for (let i = 0; i < lowerCase.length; i++) {
    if (i % 2 !== 0) {
      result.push(lowerCase[i].toUpperCase());
    } else {
      result.push(lowerCase[i]);
    }
  }
  return result.join('');
}
