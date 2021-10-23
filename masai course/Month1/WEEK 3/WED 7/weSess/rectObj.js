// Create an object with the properties length and breadth
// The object must have the methods area and perimeter which will
//  calculate and prints the area and perimeter based on the length and breadth
var rect ={
    length : 10,
    breadth : 15,
    area : function(){
        console.log(this.length * this.breadth);
    },
    perimeter : function(){
        console.log(2*(this.length + this.breadth));
    }
}
rect.area();
rect.perimeter()