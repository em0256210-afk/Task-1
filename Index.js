let months = +prompt("Enter months:");

let price = months * 350;

let disc = 0;
if (months >= 12) {
    disc = price * 0.15;
} else if (months >= 6) {
    disc = price * 0.10;
}

let total = price - disc;

let pt = prompt("Add PT? (yes/no)");
if (pt && pt.toLowerCase() === "yes") {
    total = total + 200;
}

let vat = total * 0.14;
let final = total + vat;

console.log(`Months: ${months}`);
console.log(`Price: ${price}`);
console.log(`Discount: ${disc}`);
console.log(`VAT: ${vat}`);
console.log(`Final Price: ${final}`);