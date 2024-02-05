/* exported getValues */
function getValues(object: Record<string, never>): any[] {
  const keys = [];
  for (const key in object) {
    keys.push(object[key]);
  }
  return keys;
}
