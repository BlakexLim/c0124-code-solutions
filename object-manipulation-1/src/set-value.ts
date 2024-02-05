/* exported setValue */
function setValue(
  object: Record<string, unknown>,
  key: string,
  value: any
): undefined {
  object[key] = value;
}
