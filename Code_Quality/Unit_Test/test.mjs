/***
 * 
 * while doing unit test we must using built-in function from node js : node:test and node:assert
 * 
 * NODE:TEST provide api for testing case
 * NODE:ASSERT will validate the tested code
 * 
 * @function test need 2 parameters:
 * @param {a} string   = test case name
 * @param {b} callback = callback to be executed
 * 
 * 
 * use @function assert.equal to expected same value - @positiveScenario
 * use @function assert.throws to expected error return - @negativeScenario
 * 
 * there is the task must be passed before we launch the program :
 * 
 * Function add dapat mengoperasikan penjumlahan aritmetika dengan baik.
 * Function add membangkitkan error jika nilai argumen dari numA tidak bertipe number.
 * Function add membangkitkan error jika nilai argumen dari numB tidak bertipe number.
 */

import { test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';


// test 1
test('should add correctly', () => {
  // Arrange
  const operandA = 1;
  const operandB = 1;

  // Action
  const actualValue = add(operandA, operandB);

  // Assert
  const expectedValue = 2;
  assert.equal(actualValue, expectedValue); // matching the value
});

// test 2
test('should throw an error if string passed on numA parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = '3';
    const operandB = 4;

    // Action
    add(operandA, operandB);
  };

  // Assert
  assert.throws(potentialErrorToBeThrew, Error); // expected an error on first parameter

  // if the error doesn't exist, assert will be the error itself

});

// test 3
test('should throw an error if string passed on numB parameter', () => {
  const potentialErrorToBeThrew = () => {
    // Arrange
    const operandA = 10;
    const operandB = '8';
 
    // Action
    add(operandA, operandB);
  };
 
  // Assert
  assert.throws(potentialErrorToBeThrew, Error);
});


// MISSION COMPLETE!


// why we not validate numA/B together? 
// because testing two scenarios at once is not a good practice.