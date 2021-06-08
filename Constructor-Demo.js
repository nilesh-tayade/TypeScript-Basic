var Employee = /** @class */ (function () {
    function Employee(ename, eid) {
        this.ename = ename;
        this.eid = eid;
    }
    return Employee;
}());
var e1 = new Employee("Nilesh", 1005);
console.log(e1.ename + "  : " + e1.eid);
