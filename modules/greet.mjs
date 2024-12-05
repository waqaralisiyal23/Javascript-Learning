// .mjs is the extension for ES modules
const greet = () => {
    return "Hello!";
};
export default greet;

export const greetWithName = (name) => "Hello " + name;