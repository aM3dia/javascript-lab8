//Task 1: Understanding and Creating Objects
const student = {
    name: "Anupa Ragoonanan",
    age: 22,
    enrolled: true,
    courses: ["Algorithms and Problem Solving", "Database Concepts and Design", "Operating Systems"],
    displayInfo: function () {
        return `
            <strong>Student Name:</strong> ${student.name} <br>
            <strong>Age:</strong> ${student.age} <br>
            <strong>Enrolled:</strong> ${student.enrolled ? "Yes" : "No"} <br>
            <strong>Courses:</strong> ${student.courses.join(", ")}
        `;
    }
};

// Event Listener to Display Student Info
document.getElementById("student-display").addEventListener("click", function () {
    const studentInfo = student.displayInfo();
    document.getElementById("student-object").innerHTML = studentInfo;
});

//log the name and age to console.log
console.log("Student Name:", student.name);
console.log("Age:", student.age)

//Task 2: Working with JSON
//convert the JS object to a JSON string and log to console
const studentJSON = JSON.stringify(student);
console.log("JSON String", studentJSON);

//convert the JSON string to a JS object and log to console
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//Task 3: Using Destructuring
document.getElementById("extract").addEventListener("click", function () {
    const studentExtract = `
    <strong>Student Name:</strong> ${student.name} <br>
    <strong>Courses:</strong> ${student.courses.join(", ")}
    `;
    document.getElementById("student-destructuring").innerHTML = studentExtract;
});

//log name and courses to console
const {name, courses} = student;
console.log("Name:", student.name);
console.log("Courses:", student.courses);

//destructuring array of scores
const scores = [85, 92, 78, 90];

//display array of scores in index.html
document.getElementById("scores").innerHTML = `<strong>Scores:</strong> ${scores.join(", ")}`;

//log the first two scores from an array of scores to console
const [firstScore, secondScore] = scores;
console.log("First score:", firstScore);
console.log("Second score:", secondScore);

//Task 4: Spread Operator
const cloneStudents = {...student, graduationYear: 2026};
console.log("Updated Student Information:", cloneStudents);

//combine student.courses with a new array of courses
const addCourses = ["Web Programming and Design", "JavaScript"];
const mergeCourses = [...student.courses, ...addCourses];
console.log("Merged Courses:", mergeCourses);

//Task 5: Object Methods
//dynamically add a course
student.addCourse = function (newCourse) {
    student.courses.push(newCourse);
};

student.addCourse("Work");
console.log("Updated Courses:", student.courses);

document.getElementById("dynamicArray").innerHTML = `<strong>Updated Courses:</strong> ${student.courses.join(", ")}`;

//calculate the number of courses in the new array
student.totalCourses = function () {
    return student.courses.length;
};

console.log("Total Courses:", student.totalCourses());

document.getElementById("arrayCount").innerHTML = `<strong>Total Courses:</strong> ${student.totalCourses()}`;