import * as assert from 'assert';
import t from '../dist/main.js';

it('undefined', () => {
  assert.strictEqual(t(undefined), 'undefined');
});

it('null', () => {
  assert.strictEqual(t(null), 'null');
});

it('object', () => {
  assert.strictEqual(t({}), 'Object');
});

it('func', () => {
  assert.strictEqual(
    t(() => 1),
    'function',
  );
});

it('number', () => {
  assert.strictEqual(t(-1), 'number');
});

it('0', () => {
  assert.strictEqual(t(0), 'number');
});

it('NaN', () => {
  assert.strictEqual(t(NaN), 'number');
});

it('Infinity', () => {
  assert.strictEqual(t(Infinity), 'number');
});

it('Array', () => {
  assert.strictEqual(t([]), 'Array');
});

it('Date', () => {
  assert.strictEqual(t(new Date()), 'Date');
});

class MyCls {
  id = 1;
}

it('ES6 class', () => {
  assert.strictEqual(t(new MyCls()), 'MyCls');
});

it('Typed array', () => {
  assert.strictEqual(t(new Uint16Array(10)), 'Uint16Array');
});

it('Regex', () => {
  assert.strictEqual(t(/abc/), 'RegExp');
});
