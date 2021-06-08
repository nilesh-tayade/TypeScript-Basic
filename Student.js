var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.studentMarks >= 75) {
            return "A";
        }
        else if (this.studentMarks <= 75 && this.studentMarks >= 60) {
            return "B";
        }
        else if (this.studentMarks <= 60 && this.studentMarks >= 40) {
            return "B";
        }
        else {
            return "Fail";
        }
    };
    return Student;
}());
var s1 = new Student();
s1.studentName = "Nilesh";
s1.studentCity = "Shahada";
s1.studentMarks = 85;
console.log(s1.studentName + "  " + s1.getStudentGrade());
