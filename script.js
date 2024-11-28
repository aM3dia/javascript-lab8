//Task 1: Understanding and Creating Objects
const student = {
    name: "Anupa Ragoonanan",
    age: 22,
    enrolled: true,
    courses: ["Algorithms", "Databases", "Web Design", "JavaScript", "Operating Systems"],
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