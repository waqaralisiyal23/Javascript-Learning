/*
"I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code

JavaScript Promise Object
A Promise contains both the producing code and calls to the consuming code

Promise Syntax
let myPromise = new Promise(function(myResolve, myReject) {
    "Producing Code" (May take some time)

    myResolve(); // when successful
    myReject();  // when error
});

"Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { // code if successful },
    function(error) { // code if some error }
);

When the producing code obtains the result, it should call one of the two callbacks:

When	    Call
Success	    myResolve(result value)
Error	    myReject(error object)

Promise Object Properties
A JavaScript Promise object can be:

Pending
Fulfilled
Rejected

The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

myPromise.state	    myPromise.result
"pending"	        undefined
"fulfilled"	         a result value
"rejected"	        an error object

You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.
*/

function myDisplayer(value) {
    console.log(value);
}

let myPromise = new Promise((myResolve, myReject) => {
    let num = Math.floor(Math.random() * 10) + 1;   // Random number between 1 and 10
    console.log(num);
    if (num % 2 === 0) {
        myResolve("Even");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    (result) => { myDisplayer(result) },
    (error) => { myDisplayer(error) },
);

let myPromise2 = new Promise((myResolve, myReject) => {
    setTimeout(() => { myResolve("I love You !!") }, 3000);
});

myPromise2.then(
    (result) => { myDisplayer(result) },
);