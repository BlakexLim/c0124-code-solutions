/* exported getKeys */
function getKeys(object: Record<string, string[]>): string[] {
  const result: string[] = [];
  for (const key in object) {
    result.push(key);
  }
  return result;
}
