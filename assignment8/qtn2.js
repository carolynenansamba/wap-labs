function Student(firstName, lastName) {
    this.firstName=firstName;
    this.lastName= lastName;
    this.grades=[]
}

Student.prototype.inputNewGrades = function(newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function() {
    return this.grades.reduce(((average, current, index, garray) => average+= current/garray.length), 0);
}

let stu1 = new Student("John", "Doe");
stu1.inputNewGrades(4);
stu1.inputNewGrades(4);

let stu2 = new Student("Sarah", "Sas");
stu2.inputNewGrades(1);
stu2.inputNewGrades(9);
stu2.inputNewGrades(5);


let newStudents = [stu1,stu2];

let averageGradeCF=newStudents.map((stu) => stu.computeAverageGrade()).reduce(((av, current, ind, arr)=>av=av+current/arr.length),0);

console.log(`Using Constructor Function, The average of all grades for all students is ${averageGradeCF}`);