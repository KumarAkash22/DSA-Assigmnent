var curry =140;
var quantity_curry = 6;
var rice = 80;
var quantity_rice = 3;
var discount = 8;
var tax = 10;
var tip = 50;

var total = (curry *quantity_curry) + (rice * quantity_rice);
var total_discount = total - (total * 0.08);
var total_tax = total_discount + (total_discount * 0.1);
var final = total_tax + tip;
console.log(final);