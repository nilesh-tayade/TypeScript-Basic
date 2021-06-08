var index = 0;
for (var index_1 = 0; index_1 < 5; index_1++) {
    console.log("index inside for loop : " + index_1);
}
console.log("index outside for loop : " + index);
console.log("---------------------------------------------------");
var msg;
function display() {
    var msg = " I am Learning angular";
    {
        var msg_1 = " I am Typescript";
        console.log("Inside the block  : " + msg_1);
    }
    console.log("Inside the function display : " + msg);
}
msg = " I am Full Skate Developer";
display();
console.log("Out side the function : " + msg);
