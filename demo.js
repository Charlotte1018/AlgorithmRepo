// var str="border-bottom-color";
// function parseTf(str){
//   var reg=/-(\w)/g;
//   str=str.replace(reg,function($1,$2){
//       console.log($1.toUpperCase());
//     return $2.toUpperCase();
//   });
//   return str;
// };
// console.log(parseTf(str));

// var text = "border-bottom-color";
// var pattern = /-(\w)/gm;
// /*
// * 注意:Opera 不支持 input、lastMatch、lastParen 和 multiline 属性 * Internet Explorer 不支持 multiline 属性
// */
//  if (pattern.test(text)){
//     console.log(RegExp.input);
//     console.log(RegExp.leftContext);
//     console.log(RegExp.rightContext);
//     console.log(RegExp.lastMatch);
//     console.log(RegExp.lastParen);
//     console.log(RegExp.multiline);
// }

// function copyString(str, num) {
//   let strs = str;
//   for (let i = 1; i < num; i++) {
//     strs = strs.concat(str);
//   }
//   return strs
// }
// console.log(copyString('abc', 3));

// function jsonp(obj) {
//   callback = function (object) {
//     obj.success(JSON.parse(object));
//   }

//   let script = document.createElement('script');
//   script.src = `${obj.url}?callback=response`;
//   for (key in obj.data) {
//     script.src += "&" + key + "=" + obj.data[key];
//   }
//   document.body.appendChild(script);
// }

// function isArray(arr){
//   return {}.toString.call(arr) === '[object Array]'
// }
// console.log(isArray([1,2]))

// var url = "http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2";
// function parse_url(_url){
//  var pattern = /(\w+)=(\w+)/ig;
//  var parames = {};
//  url.replace(pattern, function($0, $1, $2){
//   parames[$1] = $2;
//   console.log($0);
//  });
//  return parames;
// }
// var parames = parse_url(url);
// console.log({}.toString.call(parse_url));

// function toTFd(str) {
//     return str.replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`);
// }
// console.log(toTFd('marginLeftBottom'));
// function today(){
//     var day = new Date().getDay();
//     var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
//     return `今天是${arr[day]}`;
// }
// console.log(today());

// function fizzBuzz(num) {
//     if(arguments.length === 0 || typeof num !== 'number') return false;
//     var case1 = num % 3 === 0 && num % 5 === 0;
//     var case2 = num % 3 === 0;
//     var case3 = num % 5 === 0;
//     // if(arguments.length === 0 || isNaN(num)) return false;
//     if(case1){
//         return 'fizzbuzz';
//     } else if (case2 || case3){
//         if(case2){
//             return 'fizz';
//         }
//         if(case3){
//             return 'buzz';
//         }
//     }
//     return num;
// }
// function valueAtBit(num,bit) {
//     var str = num.toString(2);
//     return str.charAt(str.length - bit);
// }
// function convertToBinary(num) {
//     var binary = num.toString(2);
//     if(binary.length < 8){
//         while(binary.length < 8){
//             binary = '0' + binary;
//         }
//     }
//     return binary
// }
// function multiply(a, b) {
//     return a*b
// }
// function containsNumber(str) {
//     var pattern = /[0-9]/g;
//     return str.test(pattern);
// }
// function captureThreeNumbers(str) {
//     var a=str.match(/\d{3}/g);
//     if(a){
//         return a[0];
//     }else{
//         return false;
//     }
// }
/**
 * 数字千位符格式化
 * @param {*} num 
 */
// function toThousands(num) {
//     var num = (num || 0).toString(), result = '';
//     while (num.length > 3) {
//         result = ',' + num.slice(-3) + result;
//         num = num.slice(0, num.length - 3);
//     }
//     if (num) { result = "$" + num + result; }
//     return result;
// }

/**
 * 第二行math.add(2, 3)，在第一行require(‘math’)之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等。

这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于”假死”状态。
因此，浏览器端的模块，不能采用”同步加载”（synchronous），只能采用”异步加载”（asynchronous）。这就是AMD规范诞生的背景。

AMD是”Asynchronous Module Definition”的缩写，意思就是”异步模块定义”。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

模块必须采用特定的define()函数来定义。
 */

function replaceSpace(str)
{
    return str.replace(/\s/g, '')
}
console.log(replaceSpace('q e r '));