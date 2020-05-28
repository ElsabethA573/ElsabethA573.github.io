"use strict";
function max(num1, num2) {
    if (num1 > num2)
        return num1;
    else
        return num1
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3)
        return num1;
    else if (num2 > num1 && num2 > num3)
        return num2;
    else
        return num3;
}

function isVowel(c) {
    x
    var result;
    result = c == "A" || c == "a" || c == "E" || c == "e" || c == "I" || c == "i" || c == "O" || c == "o" || c == "U" || c == "u";
    return result;
}

function sum(arr) {
    let total = 0;
    for (let i in arr) {
        total += arr[i];
    }
    return total;
}

function multiply(arr) {
    let total = 1;
    for (let i in arr) {
        total *= arr[i];
    }
    return total;
}

function reverse(oldstr) {
    let reverseStr = '';
    for (let i = oldstr.length - 1; i >= 0; i--) {
        reverseStr += oldstr[i];
    }
    return reverseStr;
}

function findLongestWord(strArray) {
    let word = null;
    let lw = 0;
    strArray.forEach(function (str) {
        if (lw < str.length) {
            lw = str.length;
            word = str;
        }
    });
    return word;
}

function filterLongWords(strArray, intVal) {
    let word = new Array();
    let lw = 0;
    strArray.forEach(function (str) {
        if (intVal <= str.length) {
            word.push(str);
        }
    });
    return word;
}

function computeSumOfSquares(arr) {
    let r = arr.reduce(function (a, b) {
        return a + (b * b);
    })
    return r
}

function printOddNumbersOnly(intArray) {
    for (let i = 0; i < intArray.length; i++) {
        if ((intArray[i] % 2) == 0) {
            continue;
        } else {
            console.log(intArray[i] + " is Odd Number");
        }
    }
}

function computeSumOfSquaresOfEvensOnly(intArray) {
    let total = 0;
    for (let i = 0; i < intArray.length; i++) {
        if ((intArray[i] % 2) == 0) {
            total += intArray[i] * intArray[i]
        }
    }
    return total;
}

function sumUsingReduce(arr) {
    let r = arr.reduce(function (a, b) {
        return a + b;
    })
    return r
}

function multiplyUsingReduce(arr) {
    let r = arr.reduce(function (a, b) {
        return a * b;
    })
    return r
}

function findSecondBiggest(arr) {
    let max = 0, secondMax = 0;

    for (const value of arr) {
        if (value > max) {
            [secondMax, max] = [max, value]
        } else if (value < max && value > secondMax) {
            secondMax = value;
        }
    }
    return secondMax;
}

function printFibo(n, a, b) {
    if (n > 0) {
        console.log(a);
    }
    if (n > 1) {
        console.log(b);
    }
    for (let i = 2; i < n; i++) {
        let r = a + b;
        a = b;
        b = r;
        console.log(r);
    }
}


setInterval(() => {
    let now = new Date();
    console.log(now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+" " +now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
}, 1000)