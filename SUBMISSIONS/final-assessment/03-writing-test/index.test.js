import { sum } from './index.js';
import assert from 'node:assert';
import test from 'node:test';

test('sum function should return correct results', (t) => {
  // Test case 1: Adding positive numbers
  assert.strictEqual(sum(2, 3), 5, 'sum(2, 3) should return 5');

  // Test case 2: Adding negative numbers
  assert.strictEqual(sum(-2, -3), -5, 'sum(-2, -3) should return -5');

  // Test case 3: Adding a positive and a negative number
  assert.strictEqual(sum(2, -3), -1, 'sum(2, -3) should return -1');

  // Test case 4: Adding zero
  assert.strictEqual(sum(0, 5), 5, 'sum(0, 5) should return 5');
  assert.strictEqual(sum(5, 0), 5, 'sum(5, 0) should return 5');

  // Test case 5: Both numbers are zero
  assert.strictEqual(sum(0, 0), 0, 'sum(0, 0) should return 0');
});
