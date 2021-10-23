// Calculate the total discount for a coupon based on the below conditions To attract customers, 
// you are giving a discount. You want to give 10% of the total sale price.
// But you have also said that Rs. 100 is the 
// maximum discount that a customer can get. The minimum you need to purchase is Rs. 300.
var totalSalePrice = 800;
if((totalSalePrice >= 300) && (totalSalePrice <=1000)){
    var discount = totalSalePrice/10;
    console.log(discount);
}else if(totalSalePrice < 300){
    console.log("The minimum you need to purchase is Rs. 300");   
} else {
    var discount = 100;
    console.log(discount);
}
