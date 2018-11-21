import t from '../';

test('undefined', () => {
  expect(t(undefined)).toBe('undefined');
});

test('null', () => {
  expect(t(null)).toBe('null');
});

test('object', () => {
  expect(t(new Object())).toBe('Object');
});

test('func', () => {
  expect(t(() => 1)).toBe('function');
});

test('number', () => {
  expect(t(-1)).toBe('number');
});

test('0', () => {
  expect(t(0)).toBe('number');
});

test('NaN', () => {
  expect(t(NaN)).toBe('number');
});

test('Infinity', () => {
  expect(t(Infinity)).toBe('number');
});

test('Array', () => {
  expect(t([])).toBe('Array');
});

test('Date', () => {
  expect(t(new Date())).toBe('Date');
});

class MyCls {
  id = 1;
}

test('ES6 class', () => {
  expect(t(new MyCls())).toBe('MyCls');
});

test('Typed array', () => {
  expect(t(new Uint16Array(10))).toBe('Uint16Array');
});

test('Regex', () => {
  expect(t(/abc/)).toBe('RegExp');
});
