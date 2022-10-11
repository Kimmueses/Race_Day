let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 18;

if(registeredEarly && runnersAge > 18){
    raceNumber += 1000;
}

if(runnersAge > 18 && registeredEarly){
    console.log(`Your race number is ${raceNumber}. Your race will beging at 9:30am.`);
}
else if(runnersAge > 18 && !registeredEarly){
    console.log(`Your race number is ${raceNumber}. Your race will beging at 11:00am.`);
}
else if(runnersAge < 18){
    console.log(`Your race number is ${raceNumber}. Your race will beging at 12:30pm.`);
}
else{
    console.log('Please see registration desk.');
}