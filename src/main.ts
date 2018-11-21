// tslint:disable-next-line no-any
export default function toTypeString(obj: any): string {
  if (obj === null) {
    return 'null';
  }
  const type = typeof obj;
  if (type === 'object') {
    if (Array.isArray(obj)) {
      return 'Array';
    }
    if (obj.constructor && obj.constructor.name) {
      return obj.constructor.name;
    }
  }
  return type;
}
