class Employee
{

ename:string;
eid:number;

constructor(ename:string,eid:number)
{

        this.ename=ename;
        this.eid=eid;
}


}

let e1 = new Employee("Nilesh",1005);

console.log(e1.ename+"  : "+e1.eid);