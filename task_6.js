const ticketFare = 800;
const age = -4;
let isStudent = true; 

if((age >= 0)&& (age < 10)){
    console.log("Ticket Fare is free");
}
else if((age >= 10) && (age <= 24)){
    if(isStudent === true){
        // 50% discount
        const discount = ticketFare * 50 /100;
        const payAmount = ticketFare - discount;
        console.log(payAmount);
    }
    else{
        console.log("Ticket Fare is 800 TK");
    }
}
else if(age >=60){
    // 15% discount
    const discount = ticketFare * 15 /100;
    const payAmount = ticketFare - discount;
    console.log(payAmount);
}
else if((age >= 25) && (age <= 59)){
    console.log("Ticket Fare is 800 TK");
}
else{
    console.log("Please input correct value");
}