// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function toTypeString(obj: any): string {
  try {
    if (obj === null) {
      return 'null';
    }
    const type = typeof obj;
    if (type === 'object') {
      if (Array.isArray(obj)) {
        return 'Array';
      }
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (obj.constructor && obj.constructor.name) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return obj.constructor.name;
      }
    }
    return type;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(`to-type-string error: ${err.message}`);
    return `${obj}`;
  }
}
