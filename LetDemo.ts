var index =0;

for(let index=0; index<5;index++)
{
console.log("index inside for loop : "+ index);

}

console.log("index outside for loop : "+ index);
console.log("---------------------------------------------------");

var msg:string;

function display()
{

    let msg:string =" I am Learning angular";
    {
        let msg:string =" I am Typescript";
        console.log("Inside the block  : "+ msg);

    }

    console.log("Inside the function display : "+ msg);

}

msg =" I am Full Skate Developer"

display();
console.log("Out side the function : "+ msg);
