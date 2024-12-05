// .mjs is the extension for ES modules
import { name, age } from "./modules/person.mjs";
import message from "./modules/message.mjs";
import greet, { greetWithName } from "./modules/greet.mjs"

console.log(name);
console.log(age);
console.log(message());
console.log(greet());
console.log(greetWithName(name));