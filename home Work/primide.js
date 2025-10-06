
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let row = "";

    // spaces
   for(let k = 1; k<=5 -i;k++){
    row +=" ";
   }

    // stars
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}



