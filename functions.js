function add(x, y) {
    return x + y;
}
var addition = add(10, 20);
console.log("Addition by Named function : " + addition);
var sum = function (x, y) {
    return x + y;
};
var sumation = sum(10, 40);
console.log("Addition by Anonimous function  : " + sumation);
function greeting(msg, name) {
    return msg + " " + name;
}
var firstGreeting = greeting("Good Morning ", "Babitaji");
console.log(firstGreeting);
function OptionalGreeting(msg, name) {
    return msg + " " + name;
}
console.log("Optional Greeting all parameter : " + OptionalGreeting("Hello", "Nilesh"));
console.log("Optional Greeting Withaut all parameter : " + OptionalGreeting("Hello"));
function DefaultGreeting(name, msg) {
    if (msg === void 0) { msg = "Good Morning"; }
    return msg + " " + name;
}
console.log("Default Greeting all parameter : " + DefaultGreeting("Happy Birthday", "Nilesh"));
console.log("Default Greeting Withaut all parameter : " + DefaultGreeting("Ajay"));
function greet(msg) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    console.log(msg + " " + name);
}
greet("Hello", "Nilesh", "ajay", "sanket");
