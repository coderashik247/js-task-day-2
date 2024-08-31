const weight = 83;
const height = 167;

const BMI = weight / (height*height);

if(BMI < 18.5){
    console.log("You are underWeight");
}
else if((BMI >= 18.5) && (BMI <= 24.9)){
    console.log("You are normal");
}
else if((BMI >= 18.5) && (BMI <= 24.9)){
    console.log("You are overWeight");
}
else{
    console.log("You are obese");
}