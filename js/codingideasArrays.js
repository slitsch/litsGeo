/**
 * Created by Valued Customer on 7/6/2014.
 */
//Array code **********************
var testArr = [1,2,3,4,3,4];
var newArr = createUniqueArray(testArr);
console.log(newArr);

function createUniqueArray(arr) {
//    unique: return a new array with only unique items in that array
// so  unique([1,3,4,3,3]) -> [1,3,4]
//
    var uArr = [];
    arr.forEach(function (item) {
        if (uArr.length == 0) uArr.push(item);
        else {
            console.log(uArr.indexOf(item));
            if (uArr.indexOf(item) == -1)uArr.push(item);
        }
    });
    return uArr;
}

var pM = (6, "b2", 3, 9,5);
var arr = pushMany(pM);
console.log(arr);

function pushMany() {
//    pushMany: append multiple items to an array
    var arr2 = []
    for (var i = 0; i < arguments.length; i++) {
        arr2.push(arguments[i]);
    }
    return arr2;
}

