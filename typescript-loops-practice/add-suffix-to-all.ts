/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): string[] {
  const suffixArr: string[] = [];
  for (let i = 0; i < words.length; i++) {
    suffixArr.push(words[i] + suffix);
  }
  return suffixArr;
}
