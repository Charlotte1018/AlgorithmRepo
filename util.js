/**
 * @param arr
 * 对数组求和
 */
function sum(arr) {
    return arr.reduce(function (pre, cur) {
        return Number(pre) + Number(cur)
    })
}

/**
 * 数组排序
 */
function sort(arr) {
    arr.sort(function (a, b) { return a - b });
    return arr;
}
/**
 * 镜像一棵树
 */

/* function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
} */
function Mirror(root) {
    // write code here
    if (root === null) {
        return;
    }
    var temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}

/**
 * 数组模拟一个栈
 */
var stack = [];
function push(node) {
    stack.push(node);
}
function pop() {
    return stack.length == 0 ? null : stack.pop();
}
function top() {
    return stack.length == 0 ? null : stack[0];
}
function min() {
    return Math.min.apply(this, stack);
}

/**
 * 顺时针打印一个二维矩阵
 */
export function printMatrix(matrix) {
    // write code here
    var row = matrix.length;
    var col = matrix[0].length;
    var res = [];
    if (row == 0 || col == 0) {
        return res;
    }
    var left = 0,
        top = 0,
        right = col - 1,
        bottom = row - 1;
    while (left <= right && top <= bottom) {
        for (var i = left; i <= right; i++)
            res.push(matrix[top][i]);
        for (var i = top + 1; i <= bottom; i++)
            res.push(matrix[i][right]);
        if (top != bottom)
            for (var i = right - 1; i >= left; i--)
                res.push(matrix[bottom][i]);
        if (left != right)
            for (var i = bottom - 1; i > top; i--)
                res.push(matrix[i][left]);
        left++ , top++ , right-- , bottom--;
    }
    return res;
}

/**
 * 获取URL中的参数
 */
export function parse_url(_url) {
    var pattern = /(\w+)=(\w+)/ig;
    var parames = {};
    url.replace(pattern, function ($0, $1, $2) {
        parames[$1] = $2;
        console.log($0);
    });
    return parames;
}

/**
 * 获取Cookie
 * @param name cookie的名字
 */
export function getCookie(name) {
    var name = encodeURIComponent(name),
        cookieName = name + '=',
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf('; ', cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = document.cookie.substring(cookieStart, cookieEnd).split('=')[1];
    }
    var obj = {
        [name]: cookieValue
    }
    return obj;
}
function EventUtils() { }
EventUtils.prototype = {
    constructor: EventUtils,
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent('on' + type, handler);
        } else {
            element['on' + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler);
        } else {
            element['on' + type] = null;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    /**
     * clipboardData 对象有三个方法:getData()、setData()和 clearData()
     * @param MIME 类型
     */
    getClipboardText: function (event) {
        var clipboardData = event.clipboardData || window.clipboardData;
        return clipboardData.getData('text');
    },
    setClipboardText: function (event, value) {
        if (event.clipboardData) {
            return event.clipboardData.setData("text/plain", value);
        } else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    },
    /**
     * 自动切换焦点
     */
    tabForward: function (event) {
        var event = event || window.event,
            target = event.target || event.srcElement;
        if (target.value.length == target.maxLength) {
            var form = target.form;
            for (var i = 0; i < form.elements.length; i++) {
                if (target == form.element[i]) {
                    if (form.elements[i + 1]) {
                        form.elements[i + 1].focus();
                        return;
                    }
                }
            }
        }
    }
}
