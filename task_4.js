const myScore = 81;
const frdScore = 79;

if(myScore >80){
    if(frdScore >80){
        console.log("Lets go for a lunch");
    }
    else if((frdScore >= 60) && (frdScore <= 80)){
        console.log("Good Luck next time");
    }
    else if((frdScore >= 40) && (frdScore <= 60)){
        console.log("Message Unseen");
    }
    else if((frdScore >= 0) && (frdScore <= 40)){
        console.log("Block You");
    }
    else{
        console.log("Please input correct value");
    }
}
else if(myScore >=0 && myScore <= 80){
    console.log("Sleep and sleep");
}
else{
    console.log("Please input correct value");
}
