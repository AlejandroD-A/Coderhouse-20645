const Singleton = require("./Singleton");

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj.printValue();
obj.printValue();

console.log("Equals:: ", obj === obj2);
