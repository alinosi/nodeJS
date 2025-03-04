const myName: string = 'Flow';
 
function greet(name: string) { // variable type can be declared with ': type' notation
  console.log(`Hello, ${name}. My name is ${myName}`);
}

greet('hello'); 

/**
 * if the greet function contains a number or other type, vs code will identify the variable as the wrong type
 * 
 * this file will error if the extention is js because node not recognize statically type statement
 * So we must change it to typescript 
 * 
 */