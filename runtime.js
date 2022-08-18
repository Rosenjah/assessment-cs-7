const perf = require('execution-time')();


function doublerAppend(nums) {

  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }

}


function doublerInsert(nums) {

  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }

}


function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);


// How long does it take to double every number in a given
// array?

// tinyArray

// Push
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results

// Unshift
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log('Results for the tinyArray');
console.log('================================');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
console.log('\n');


// smallArray

// Push
perf.start();                     // Starts timer
doublerAppend(smallArray);
let resultsAppendSmallArray = perf.stop();  // Stops timer and save time results

// Unshift
perf.start();
doublerInsert(smallArray);
let resultsInsertSmallArray = perf.stop();

console.log('Results for the smallArray');
console.log('================================');
console.log("insert", resultsInsertSmallArray.preciseWords);
console.log("append", resultsAppendSmallArray.preciseWords);
console.log('\n');

// mediumArray

// Push
perf.start();                     // Starts timer
doublerAppend(mediumArray);
let resultsAppendMediumArray = perf.stop();  // Stops timer and save time results

// Unshift
perf.start();
doublerInsert(smallArray);
let resultsInsertMediumArray = perf.stop();

console.log('Results for the mediumArray');
console.log('================================');
console.log("insert", resultsInsertMediumArray.preciseWords);
console.log("append", resultsAppendMediumArray.preciseWords);
console.log('\n');

// largeArray

// Push
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppendLargeArray = perf.stop();  // Stops timer and save time results

// Unshift
perf.start();
doublerInsert(largeArray);
let resultsInsertLargeArray = perf.stop();

console.log('Results for the largeArray');
console.log('================================');
console.log("insert", resultsInsertLargeArray.preciseWords);
console.log("append", resultsAppendLargeArray.preciseWords);
console.log('\n');

//extraLargeArray

// Push
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppendExtraLargeArray = perf.stop();  // Stops timer and save time results

// Unshift
perf.start();
doublerInsert(extraLargeArray);
let resultsInsertExtraLargeArray = perf.stop();

console.log('Results for the extraLargeArray');
console.log('================================');
console.log("insert", resultsInsertExtraLargeArray.preciseWords);
console.log("append", resultsAppendExtraLargeArray.preciseWords);
console.log('\n');
