// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// function all(arr, cb){

// }
const callback = function(num){return num < 7}

let allAreLessThanSeven = all([1,2,6], callback);


// let allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });


console.log(allAreLessThanSeven); // false
console.log()

function all(array, callback){
	let copy = array.slice(); // splice create a shallow copy of the array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

