// Simple Timeout
//
// Let's write a simple setTimeout function!
//
// First, set a simple timeout for 5000 ms (use window.setTimeout). Pass in a callback function that calls alert('HAMMERTIME').
//
// Open up Chrome Devtools and copy your code into the console to test it. (Open a chrome window then press cmd + option + i. Press esc to show the console.)
//
// Note: while we're waiting for our timeout, we can still scroll around the website and interact with it normally. Is setTimeout synchronous or asynchronous?
//
// Timeout Plus Closure
//
// Next, we are going to write a function hammerTime that takes in one argument - time. When the function is run, it should set a timeout on the window. Pass a callback to the timeout that creates an alert ${time} is hammertime!.
//
// Notice that the callback function closed over the time variable in the outer scope of hammerTime.

// window.setTimeout(function(){
//   alert('HAMMERTIME');
//
// },5000);
//
//
// function hammerTime(time){
//
//   //example of closure
//   window.setTimeout(function(){
//
//     alert(`${time} is hammertime!`);
//   });
//
// };

///////////////////////////

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function teaAndBiscuits () {
  reader.question('Would you like some tea?', function (res) {
    console.log(`You replied ${res}.`);
    reader.question('Would you like some biscuits?', function (res2) {
      console.log(`You replied ${res2}.`);

      const first = (res === 'yes') ? 'do' : 'don\'t';
      const second = (res2 === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
};

teaAndBiscuits();
