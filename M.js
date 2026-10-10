// System (input - process - output)

let price = +prompt('Please enter price:');
let quantity = +prompt('Please enter quantity:');

let subtotal = price * quantity;

let shipping = 0;
if (subtotal >= 1000) {
    shipping = 0;
} else {
    shipping = 60;
}

let totalBeforeDiscount = subtotal + shipping;

let userHasCoupon = prompt('Do you have a coupon? (yes/no)');
let discount = 0;

if (userHasCoupon && userHasCoupon.toLowerCase() === 'yes') {
    let discountPercentage = +prompt('Please enter discount percentage:');
    discount = totalBeforeDiscount * (discountPercentage / 100);
    totalBeforeDiscount = totalBeforeDiscount - discount;
}

let vatValue = Math.floor((14 / 100) * totalBeforeDiscount);
let finalPrice = totalBeforeDiscount + vatValue;

console.log(`Subtotal Price is : ${subtotal}`);
console.log(`Shipping Cost is : ${shipping}`);
console.log(`Discount Amount is : ${discount}`);
console.log(`VAT Value 14% : ${vatValue}`);
console.log(`Final Price is : ${finalPrice}`);