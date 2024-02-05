/* exported toObject */
function toObject(keyValuePair: Record<string, unknown>): any {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const object = {};
  object[key] = value;
  return object;
}
