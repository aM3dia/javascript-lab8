//understanding and creating objects
const student = {
    name: "Anupa Ragoonanan",
    age: 22,
    enrolled: true,
    courses: ["Algorithms", "Databases", "Web Design", "JavaScript", "Operating Systems"],
    displayInfo: function () {
        return `
            <strong>Student Name:</strong> ${this.name} <br>
            <strong>Age:</strong> ${this.age} <br>
            <strong>Enrolled:</strong> ${this.enrolled ? "Yes" : "No"} <br>
            <strong>Courses:</strong> ${this.courses.join(", ")}
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

//convert the JS object to a JSON string and log to console
const studentJSON = JSON.stringify(student);
console.log("JSON String", studentJSON);

//convert the JSON string to a JS object and log to console
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);
