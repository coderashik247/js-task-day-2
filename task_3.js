const marks = 89;
let grade;

if((marks >= 90) && (marks <= 100)){
    grade = "A";
    console.log(grade);
}
else if((marks >= 80) && (marks <= 89)){
    grade = "B";
    console.log(grade);
}
else if((marks >= 70) && (marks <= 79)){
    grade = "C";
    console.log(grade);
}
else if((marks >= 60) && (marks <= 69)){
    grade = "D";
    console.log(grade);
}
else if((marks >= 0) && (marks <= 59)){
    grade = "Fail";
    console.log(grade);
}
else{
    console.log("Please input correct value");
}
