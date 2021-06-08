var petName = "dog";
function setPetName() {
    var petName = "cat";
    console.log("Inside the function : " + petName);
}
setPetName();
console.log("Outside the function : " + petName);
console.log("--------------------------------------------------");
var index = 0;
for (index = 0; index < 5; index++) {
    console.log("index inside for loop : " + index);
}
console.log("index outside for loop : " + index);
