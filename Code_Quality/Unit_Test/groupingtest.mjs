/**
 * 
 * we also can use describe to grouping the unit case to make the output more readable 
 * 
 */


import { describe, test } from 'node:test';
import assert from 'node:assert';
import { add } from './calculator.mjs';
 
describe('Calculator', () => {
  test('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;
  
    // Action
    const actualValue = add(operandA, operandB);
  
    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });
 
   // test 2
  test('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '3';
      const operandB = '4';
  
      // Action
      add(operandA, operandB);
    };
  
    // Assert
    assert.throws(potentialErrorToBeThrew, Error); 
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
});