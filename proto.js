function log(...v) {
    return console.log(...v);
}
function SuperType() {
    this.name = 'super';
}
SuperType.prototype.getName = function () {
    return this.name;
}
function SubType(name) {
    this.name = name;
}
SubType.prototype = new SuperType('sub');
SubType.prototype.getName = function () {
    return this.name;
}
// var instance = new SubType('instaxnce');
// log(instance.getName(),instance.name, SubType.prototype.getName(), SuperType.prototype.getName());


/**
 * 继承
 * 1. 借用构造函数
 */
function SuperType(name) {
    this.name = name;
}
function SubType() {
    //继承了 SuperType，同时还传递了参数 
    SuperType.call(this, "Nicholas");
}

/**
 * 访问父类的方法，超集Uber
 */
function Shape() { }
Shape.prototype.name = 'Shape';
Shape.prototype.toString = function () {
    //this.constructor == Shape.prototype.constructor;
    // var consts = this.constructor;
    return this.uber ? this.uber.toString() + ',' + this.name : this.name;
}
function TwoDShape() { }
var F = function () { }
F.prototype = new Shape();
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.uber = Shape.prototype;
TwoDShape.prototype.name = '2D Shape';

var two = new TwoDShape();
console.log(two.toString())

function Triangle(side, height) {
    this.side = side;
    this.height = height;
}
var f = function () { }
f.prototype = TwoDShape.prototype;
Triangle.prototype = new f();
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function () {
    return this.side * this.height / 2;
}
Triangle.prototype.uber = TwoDShape.prototype;
var tri = new Triangle(5, 10);
console.log(tri.toString());
/**
 * 
 * @param {object} child 
 * @param {object } parent 
 */
function extend(child, parent) {
    var F = function () { }
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.uber = parent.prototype;
}
