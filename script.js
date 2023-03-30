// function hideForm(){
//     document.getElementById('myForm').style.display="none";
// }
let userFname
let userLname
let userSubjects
function myForm(){
    userFname = document.getElementById('first-name').value;
    userLname = document.getElementById('last-name').value;
    userSubjects = document.getElementById('subjects').value;
    console.log(userFname, userLname, userSubjects)
}

function myGrades(){
    for (i = 0; i < userSubjects; i++){
        let subject = prompt("Enter your subject "+(i+1));
        let grades = prompt("Enter your grade(0-100)");
        alert("Grade for subject " + (i+1) + " "+ subject.toUpperCase() + " is " +grades);
        document.getElementById('grades').innerHTML+=("<h5>" + subject.toUpperCase() + " - " + grades+ "</h5>");
    }

}

function hideButton(){
    document.getElementById('myButton').style.display="none";

}