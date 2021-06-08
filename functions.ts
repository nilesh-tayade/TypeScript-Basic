
function add(x:number,y:number):number
{
    return x+y;
}

let addition = add(10,20);
console.log("Addition by Named function : "+addition);

let sum=function (x:number,y:number):number
{
    return x+y;
}

let sumation = sum(10,40);
console.log("Addition by Anonimous function  : "+sumation);


function greeting (msg:string,name:string):string
{
    return msg+" "+name;
}

let firstGreeting =greeting("Good Morning ","Babitaji");
console.log(firstGreeting);

function OptionalGreeting (msg:string,name?:string):string
{
    return msg+" "+name;
}

console.log("Optional Greeting all parameter : "+OptionalGreeting("Hello","Nilesh"));
console.log("Optional Greeting Withaut all parameter : "+OptionalGreeting("Hello"));


function DefaultGreeting (name:string,msg:string="Good Morning"):string
{
    return msg+" "+name;
}

console.log("Default Greeting all parameter : "+DefaultGreeting("Happy Birthday","Nilesh"));
console.log("Default Greeting Withaut all parameter : "+DefaultGreeting("Ajay"));


function greet(msg :string ,...name:string[])
{
console.log(msg +" "+name);

}

greet("Hello","Nilesh","ajay","sanket");