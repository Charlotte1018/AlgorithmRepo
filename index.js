var func = require('./Library');
// import { parse_url } from './util';
/**
 * 闭包
 * @param {string} i 
 */
function log(i) {
    return function () {
        console.log(i++);
    }
}
var data = [1, 2, 4]
// var a = parse_url("http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2")
var a = data.slice()
// console.log(a);

function Sub(initValue) {
    this.initValue = initValue;
    this.add = function (value) {
        this.initValue += value;
        return this;
    };
    this.getResult = function () {
        return this.initValue;
    }
}
// console.log(new Sub(0).add(100).add(50).add(-30).getResult());

var n = 6,
    m = 3,
    value = [1, 7, 2,2, 4, 5, 9];
for (var i = 0; i < m; i++) {
    var min = Math.min.apply(null, value),
        index = value.indexOf(min),
        sum = min + value[index + 1];
    value.splice(index, 2, sum);
}
var power = Math.min.apply(null, value);
// console.log(power)
var a = ['0','1','2'],b = '0,1,2'.split(',')
console.log(a===b)