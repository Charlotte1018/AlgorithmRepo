var func = require ('./Library');
import { parse_url } from './util';
/**
 * 闭包
 * @param {string} i 
 */
function log(i){
    return function(){
        console.log(i++);
    }
}

var a = parse_url("http://127.0.0.1/e/action/ShowInfo.php?classid=9&id=2")
console.log(a);