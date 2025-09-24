const prompt = require("prompt-sync")();
let day = prompt("day: ");
switch (day) {

    case "Monday":
        console.log("start of work week");
        break;

    case "Friday":
        console.log(" End of the Weekend");
        break;
    case "sunday":
        console.log("Weekend");
        break;
    default:
         console.log("reqular");
        break;


}
