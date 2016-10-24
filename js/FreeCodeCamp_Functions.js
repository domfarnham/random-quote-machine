// Find the Longest Word in a String
// Return the length of the longest word in the 
// provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  var array = str.split(" ");
  console.log("array is " + array);
  var longest = array.sort(function(a, b) {
    return b.length - a.length;
  });
  return longest[0].length;
}

// findLongestWord("The quick brown fox jumped over the lazy dog");

// Title Case a Sentence Complete
// Return the provided string with the first letter of 
// each word capitalized. Make sure the rest of the word 
// is in lower case.
// For the purpose of this exercise, you should also 
// capitalize connecting words like "the" and "of".

function titleCase(str) {
 
  var array = str.split(" ");
  var toUpper = array.map(function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  });
  
  return toUpper.join(" ");
}

// titleCase("I'm a little tea pot");

// Return Largest Numbers in Arrays Complete
// Return an array consisting of the largest number 
// from each provided sub-array. For simplicity, the 
// provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a 
// simple for loop, and access each member with array 
// syntax arr[i].

function largestOfFour(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i].sort(function(a, b) {
      return b - a;
    });
  }
  newArr = arr.map(function(val) {
    return val[0];
  });
  return newArr;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// Confirm the Ending Complete
// Check if a string (first argument, str) ends with 
// the given target string (second argument, target).
// This challenge can be solved with the .endsWith() 
// method, which was introduced in ES2015. But for 
// the purpose of this challenge, we would like you 
// to use one of the JavaScript substring methods 
// instead.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}

// confirmEnding("Bastian", "n");


// Repeat a string repeat a string
// Repeat a given string (first argument) num times 
// (second argument). Return an empty string if num 
// is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  var array = [];
  for (var i = num; i > 0; i--) {
    array.push(str);
  }
  return array.join("");
}

// repeatStringNumTimes("abc", 3);



// Truncate a string
// Truncate a string (first argument) if it 
// is longer than the given maximum string 
// length (second argument). Return the 
// truncated string with a ... ending.
// Note that inserting the three dots to the 
// end will add to the string length.
// However, if the given maximum string length 
// num is less than or equal to 3, then the 
// addition of the three dots does not add to 
// the string length in determining the 
// truncated string.

function truncateString(str, num) {
  var newStr = "";
  var truncated = "";
  if (num <= 3) {
    newStr = str.slice(0, num);
    truncated = newStr + "...";
  } else if (str.length > num && str.length !== num) {
    newStr = str.slice(0, num);
    truncated = newStr.slice(0, -3) + "...";
  } else if (str.length <= num) {
    truncated = str;
  } 
  return truncated;
}

// truncateString("A-tisket a-tasket A green and yellow basket", 11);



// Chunky Monkey Complete
// Write a function that splits an array 
// (first argument) into groups the length 
// of size (second argument) and returns 
// them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];

  i = 0;
  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
  console.log("newArr is: " + newArr);
  i += size;
  }

  
  return newArr;
}

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);



// Slasher Flick Complete
// Return the remaining elements of an 
// array after chopping off n elements 
// from the head.
// The head means the beginning of the 
// array, or the zeroth index.

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  newArr = arr.splice(0, howMany);

  return arr;
}

// slasher([1, 2, 3], 2);



// Mutations
// Return true if the string in the first 
// element of the array contains all of 
// the letters of the string in the second 
// element of the array.
// For example, ["hello", "Hello"], should 
// return true because all of the letters 
// in the second string are present in the 
// first, ignoring case.
// The arguments ["hello", "hey"] should 
// return false because the string "hello" 
// does not contain a "y".
// Lastly, ["Alien", "line"], should return 
// true because all of the letters in "line" 
// are present in "Alien".

function mutation(arr) {
  var str = arr[0].toLowerCase();
  var count = 0;
  
  for (var i = arr[1].length - 1; i >= 0; i--) {
    console.log("arr[1][i] is " + arr[1][i]);
    var pos = str.indexOf(arr[1][i].toLowerCase());
    console.log("pos is " + pos);
    if (pos === -1) {
      return false;
    }
    while (pos !== -1) {
    count++;
      pos = str.indexOf(arr[1][i].toLowerCase(), pos + 1);
      console.log("pos is " + pos);
    }
    console.log("Another for loop. Count is " + count);
  }
  if (count >= arr[1].length) {
    return true;
  } else {
    return false;
  }
}

// mutation(["hello", "hey"]);


// Falsy Bouncer Complete
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, 
// null, 0, "", undefined, and NaN.


function bouncer(arr) {
	
	var invalidEntries = 0;
	var filterOut = function(array) {
	console.log("function called");
	if (array !== 0 && !isNaN(array) && typeof(array) === 'number' || typeof(array) === 'string' && array !== false && array !== null && array !== "") {
		return true;
	} else {
		invalidEntries++;
		return false;
  	}
  	console.log("i is : " + i);
  	console.log("invalidEntries is : " + invalidEntries);
	};
	console.log("arr.length is " + arr.length);
	
	var filteredArr = arr.filter(filterOut);
	console.log("filteredArr is: " + filteredArr);
	return filteredArr;
}

// bouncer([7, "ate", "", false, 9]);



// Seek and Destroy Complete 
// You will be provided with an initial 
// array (the first argument in the 
// destroyer function), followed by one 
// or more arguments. Remove all elements 
// from the initial array that are of the 
// same value as these arguments.


function destroyer(arr) {
  // Remove all the values
  var invalidEntries = 0;
  var a = arguments[1];
  var b = arguments[2];
  var c = arguments[3];
	var filterOut = function(array) {
	console.log("function called");
	console.log("A is " + a);

	if (array !== a && array !== b && array !== c) {
		return true;
	} else {
		invalidEntries++;
		return false;
  	}
	};
	console.log("arr.length is " + arr.length);
	
	var filteredArr = arr.filter(filterOut);
	console.log("filteredArr is: " + filteredArr);
  return filteredArr;
}
// Where do I belong
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Return the lowest index at which a value 
// (second argument) should be inserted into an 
// array (first argument) once it has been sorted. 
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) 
// should return 1 because it is greater than 1 
// (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should 
// return 2 because once the array has been sorted 
// it will look like [3,5,20] and 19 is less than 
// 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {

  arr.push(num);

  arr.sort(function(a, b) {   
    return a - b;
  });

  var mapped = arr.map(function(el, i) {
    return { index: i, value: el };
  });
  console.log(mapped);
  var result = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].value === nameKey) {
            return myArray[i];
        }
    }
  };
  console.log(result(num, mapped));
  return result(num, mapped).index;
}

// getIndexToIns([40, 60], 50);


// Caesars Cipher 
// One of the simplest and most widely known 
// ciphers is a Caesar cipher, also known as a 
// shift cipher. In a shift cipher the meanings 
// of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, 
// where the values of the letters are shifted by 
// 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Write a function which takes a ROT13 encoded 
// string as input and returns a decoded string.
// All letters will be uppercase. Do not transform 
// any non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.


function rot13(str) { // LBH QVQ VG!
  // split string into array
  var array = str.split(" ");
  console.log(array);
  var newArray = ["", "", "", "", "", "", "", ""];
  // run through each character in every element of the array
  for (var i = array.length - 1; i >= 0; i--) {
  	newArray.push("");
  	for (var j = 0; j < array[i].length; j++) {
  		// Get current char code values
  		var k;
  		if (array[i].charCodeAt(j) < 65) {
  			k = array[i].charCodeAt(j);
  		} else if (array[i].charCodeAt(j) < 78) {
  			k = array[i].charCodeAt(j) +13;
  		} else {
  			k = array[i].charCodeAt(j) -13;
  		}
  		
  		console.log("k is : " + k);
			// change char code values to -13
			newArray[i] += String.fromCharCode(k);
  	}
  }
  newArray.pop();
  newArray.pop();
  newArray.pop();
  newArray.pop();
  newArray.pop();
  newArray.pop();
  newArray.pop();
  newArray.pop();
  console.log("newArray is :" + newArray);
  var formattedArray = newArray.join(" ");
  // var newChar = array[0].charCodeAt(0) - 13;
  // console.log("newChar is " + newChar);

  // array[0] = String.fromCharCode(70, 66, 67, 68);

  // console.log(array[0]);
  return formattedArray;
}


// output = rot13("SERR PBQR PNZC");
// document.write("<h1>" + output + "</h1>");



// JQuery
$(document).ready(function() {
  $("#getMessage").on("click", function() {
     $.getJSON("https://www.freecodecamp.com/json/cats.json", function(json) {

      var html = "";
      // Only change code below this line.
      json.forEach(function(val) {
        console.log("val is : " + val);
        var keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function(key) {
          html += "<strong>" + key + "</strong>: " +         val[key] + "<br>";
        });
        html += "</div><br>";
      });
      
      
      // Only change code above this line.

      $(".message").html(html);
    });
  });
}); 