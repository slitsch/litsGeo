/**
 * Created by Valued Customer on 7/2/2014.
 * Coding ideas from NW

 */

/*String stuff
* write a fn that escapes html entities like "&" -> amp*/

//Connect js to indexFlex.html buttons and input
jQuery(document).ready(function($) {
//    console.log($('#abcbox').val())
    var textBox = document.getElementById("abcBox");
//    textBox.value = "1234";

//    console.log(phoneNum);
    $('#button1').click(function() {
        var phoneNum = textBox.value;
        phoneNum = phoneFormat(phoneNum);
        console.log(phoneNum);
        var outTextbox = document.getElementById('abcBoxOut');
        outTextbox.value = phoneNum;
    });
    $('#button2').on('click', function() {
        var arr = document.getElementById('uniqArrBox').value;
        console.log(arr);
        arr = createUniqueArray(arr);
        console.log(arr);
        document.getElementById('uniqArrBoxOut').value = arr;
    });
    $('slugButton').on('click', function(){
        var str1 = document.getElementById('slugBox').value;
        console.log(str1);
        str1 = slugize(str1);
        document.getElementById('slugBox').value = str;
    })
});

// **** test strings ****
//var inputText = "Hi! & \nBye #1\n";
//console.log("inputText: ", inputText);
//
//var result = escapeInputText(inputText);
//console.log("escapeInputText ", result);
//
//var slugResult = slugize(inputText);
//console.log("slugResult: ", slugResult);
//
//var nl2brResult = newline2br(inputText);
//console.log("newline2br: ", nl2brResult);
//
//var badNum = "12309!gy65784";
//var badNum2 = "1234567891011";
//var goodNum = "5309259837";
//console.log("phoneFormat results: ",phoneFormat(badNum));
//console.log("phoneFormat results: ",phoneFormat(badNum2));
//console.log("phoneFormat results: ",phoneFormat(goodNum));

function escapeInputText(str){
    var arr = str.split('');
    var escaped = [];
    arr.forEach(function (letter){
        switch (letter) {
            case "!":
                letter = "&excl";
                escaped.push(letter);
                break;
            case "&":
                letter = "&amp";
                escaped.push(letter);
                break;
            case "#":
                letter = "&num";
                escaped.push(letter);
                break;
            case "%":
                letter = "&percnt";
                escaped.push(letter);
                break;

            default:
                escaped.push(letter);
        }
    });

    return escaped.join('')
}

function slugize(str) {
//    slugize a string. replace all none alphanumeric characters with a "-"
// so "hi there" turns to "hi-there" (url friendly)
  return str.replace(/(\W)/g,"-");
}

function newline2br(str) {
//    newline to br - replace text newline breaks with the html equivalent <br />
    return str.replace("\n", "<br>")
}

function phoneFormat(numStr) {
//    phone number format - detect if a string is a phone number
// and properly format it with dashes.
    console.log(numStr);
    var reg = /(\D)/g; //includes non-number chars
    if (numStr.match(reg)) {
        return "Non-numbers are included: string invalid: " + numStr;
    }
   if (numStr.length > 10) {
    if (numStr[0] ==="0") {
        return "String is long, it might be an international number, I'll ignore it: " + numStr;
    }
    else {
        return "String is too long; it is not a phone number: " + numStr;
    }
   }
   else if (numStr.length < 10) {
       return "String is too short to be a phone number";
   }
   else {
       var areaCode = numStr.slice(0,3);
       var digit3 = numStr.slice(3,6);
       var digit4 = numStr.slice(6,10);
       return "(" + areaCode + ") " + digit3 + "-" + digit4;
//       console.log(areaCode, digit3, digit4)
   }
}

//Array code **********************
//var testArr = [1,2,3,4,3,4];
//console.log(createUniqueArray(testArr));

function createUniqueArray(arr) {
//    unique: return a new array with only unique items in that array
// so  unique([1,3,4,3,3]) -> [1,3,4]
//
    var uArr = [];
    console.log(arr);
//    arr.forEach(function (item) {
//        if (uArr.length == 0) uArr.push(item);
//        else {
//            if (uArr.indexOf(item) == false)uArr.push(item);
//        }
//    });

    for(var i = 0; i<arr.length; i++){
        if (arr[i] != "["){
            var item = arr[i];
            if (item !== ',') {
                if (uArr.length == 0) uArr.push(item);
                else {
                    if (uArr.indexOf(item) === -1)uArr.push(item);
                }
            }
        }
    }
    return uArr;
}