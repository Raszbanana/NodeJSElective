
// Action Functions
const passing = (name) => console.log(`${name} is passing by his/hers momma's house`);
const lives = (location) => console.log(`${location} is his location`);
const running = (name) => console.log(`${name} is running`);


// Action Function
function doActionWithSomeone(anyFunctionReference, name, secondFunction, location) {
    anyFunctionReference(name);
    secondFunction(location);
}

doActionWithSomeone(passing, "Joeline", lives, "Copenhagen");