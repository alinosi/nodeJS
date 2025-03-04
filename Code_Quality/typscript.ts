/**
 * 
 * Typescript is a language developed by microsoft to support statically variable types
 * 
 */


const myNames: string = 'TypeScript';
/**
 * i cannot decalre const myName and change it to myNames because myName already declared in flow.ts
 * 
 * @param name string 
 * 
 * in typescript we cannot redeclare variable with same name, notes: the file in same directory
 */ 
function greets(name: string) {
/**
 * also with function too
 */
  console.log(`Hello, ${name}. My name is ${myName}`);
}
 
greet('JavaScript');


/**
 * 
 * But if you don't wanna use tsc, you can use bun environtment to run ts file
 * because bun has recognize ts notation
 * 
 */