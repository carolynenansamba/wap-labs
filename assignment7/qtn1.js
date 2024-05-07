console.log('Method 1: Using Bind')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        const res = function(student) {
            console.log(this.title + ": " + student);
        }
        this.students.forEach(res.bind(this));
    }
};
group.showList();


console.log('Method 2: Using Arrow Function')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function() {
        this.students.forEach((student) =>{
            console.log(this.title + ": " + student);
        });
    }
};
group.showList();


console.log('Method 3: Using call + wrapper')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        const result = (stu) => function (student) {
            console.log(this.title + ": " + student);
        }.call(this, stu);
        this.students.forEach(result);
    }
};
group.showList();

console.log('Method 4: Using apply + wrapper')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        const result = (stu) => function (student) {
            console.log(this.title + ": " + student);
        }.call(this, [stu]);
        this.students.forEach(result);
    }
};
group.showList();

console.log('Method 5: Using self pattern')
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList: function () {
        let self = this;
        self.students.forEach(function (student) { 
            console.log(self.title + ": " + student); });
    }
};
group.showList();