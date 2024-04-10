// console.log("Hello");
// setTimeout(() => {
//   console.log("Timeout");
// }, 6000);

// /* setImmediate */

// setImmediate(() => {
//   console.log("setImmediate");
// }, 6000);

// process.nextTick(() => {
//   console.log("nextTick");
// });
// console.log("first");

let count = 0;
const cb = () => {
  console.log(`Processing nextTick cb ${++count}`);
  process.nextTick(cb);
};
setImmediate(() => console.log("setImmediate is called"));
setTimeout(() => console.log("setTimeout executed"), 100);
process.nextTick(cb);
console.log("Start");
