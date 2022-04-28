export const cloneObject = (obj: Record<string, unknown>): Record<string, unknown> =>
  JSON.parse(JSON.stringify(obj));
