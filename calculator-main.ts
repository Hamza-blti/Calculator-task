import power from "./power.js";
import { add } from "./add.js";
import { modulus } from "./modulus.js";
import { subtract } from "./sub.js";
import { divide } from "./divide.js";
import { multiply } from "./multiply.js";

import inquirer from "inquirer";

let cal = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "Enter Your First Number : ",
  },
  {
    name: "operation",
    type: "input",
    message: "Enter Your Operation : ",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "Enter Your Second Number : ",
  },
  
]);
let o: string = cal.operation;
let first:number = cal.firstNumber;
let second:number = cal.secondNumber

switch (o) {
  case "+":
    console.log(add(first,second))
    break;

  case "-":
    console.log(subtract(first,second))
    break;
  case "x":
    console.log(multiply(first,second))
    break;
  case "/":
    console.log(divide(first,second))
    break;
  case "%":
    console.log(modulus(first,second))
    break;
  case "^":
    console.log(power(first,second))
    break;
  default:
    console.log("Input Error");
    
    break;
}


