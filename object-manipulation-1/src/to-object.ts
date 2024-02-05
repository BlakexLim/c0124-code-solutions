/* exported toObject */
function toObject(keyValuePair: [string, unknown]): Record<string, unknown> {
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  const object: Record<string, unknown> = {};
  object[key] = value;
  return object;
}
