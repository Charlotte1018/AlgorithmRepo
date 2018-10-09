/**
 * 排序算法函数库 Function
 */
function Algorithm() {}

Algorithm.prototype = {
    constructor : Algorithm,
    swap,
    print,
    bubbleSort,
    selectionSort,
    insertionSort,
    mergeSortReg,
    quickSort,
    toThousands
}
/**
 * 交换数组中的两个值
 * @param array : 传入的数组
 * @param i : 待交换的索引值
 * @param j : 待交换的索引值
 */

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * 打印函数
 * @param value : 打印的参数
 */
function print(value) {
    console.log(value);
}
/**
 * 冒泡排序 时间复杂度为：O(n^2)
 * @param array : 待排序的数组
 */
function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
/**
 * 选择排序 时间复杂度为：O(n^2)
 * @param array : 待排序的数组
 */
function selectionSort(array) {
    let length = array.length,
        minIndex;
    for (let i = 0; i < length; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(array, i, minIndex);
        }
    }
    return array;
}
/**
 * 插入排序
 * @param array : 待排序数组
 */

function insertionSort(array) {
    let length = array.length,
        temp,
        i,
        j;
    for (i = 1; i < length; i++) {
        temp = array[i];
        j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
    return array;
}

/**
 * 归并排序 时间复杂度 O( nlog(n) )
 */

/**
 * 拆分之后归并单个元素的函数
 * @param left : 归并左半部分
 * @param right : 归并右半部分
 */
function merge(left, right) {
    let il = 0, ir = 0, result = [];
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}
/**
 * 拆分数组到单个元素
 * @param array : 待排序数组
 */
function mergeSortReg(array) {
    let length = array.length;
    if (length === 1) return array;
    let mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSortReg(left), mergeSortReg(right))
}
/**
 * 快速排序  不会溢出的版本
 * @param {*} array : 待排序的数组
 */

function quickSort(arr) {
    function swap(arr, right, left) {
        var tmp = arr[right];
        arr[right] = arr[left];
        arr[left] = tmp;
    }
    function partition(arr, left, right) {//分区操作，
        var pivotValue = arr[right]//最右面设为标准
        var storeIndex = left;
        for (var i = left; i < right; i++) {
            if (arr[i] <= pivotValue) {
                swap(arr, storeIndex, i);
                storeIndex++;
            }
        }
        swap(arr, right, storeIndex);
        return storeIndex//返回标杆元素的索引值
    }
    function sort(arr, left, right) {
        if (left > right) return;
        var storeIndex = partition(arr, left, right);
        sort(arr, left, storeIndex - 1);
        sort(arr, storeIndex + 1, right);
    }
    sort(arr, 0, arr.length - 1);
    return arr;
}

/**
 * 数字千位符格式化
 * @param {number} num 
 */
function toThousands(num) {
    var num = (num || 0).toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = "$" + num + result; }
    return result;
}

function toThousands(num) {
    var num = num.toString(), result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    result = "$" + num + result;
    return result;
}

/**
 * 合并两个链表
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    var p1 = pHead1, p2 = pHead2, p,pHead;
    if(!pHead1) return pHead2;
    if(!pHead2) return pHead1;
    if(p2.val<p1.val){
        p = new ListNode(p2.val);
        p2 = p2.next;
    }else {
        p = new ListNode(p1.val);
        p1 = p1.next;
    }
    pHead = p;
    while(p1 && p2){
        if(p1.val < p2.val){
            p.next = new ListNode(p1.val);
            p = p.next;
            p1 = p1.next;
        } else {
            p.next = new ListNode(p2.val);
            p = p.next;
            p2 = p2.next;
        }
    }
    if(p1){
        p.next = p1;
    }
    if(p2){
        p.next = p2;
    }
    return pHead;
}
var func = new Algorithm();
module.exports = func;