// let input = process.argv.slice(2);

// const alarm = (i = 0) => {
//   // No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
//   if (!input) {
//     return;
//   }
//   if (i > input.length - 1) {
//     return;
//   }
//   // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
//   if (Math.sign(input[i]) === -1) {
//     i++;
//     return alarm(i);
//   }
//   // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
//   if (isNaN(input[i])) {
//     i++;
//     return alarm(i);
//   }
//   if (i === 0) {
//     setTimeout(() => {
//       process.stdout.write("\x07");
//       console.log("beeb");
//       i++;
//       return alarm(i);
//     }, input[i] * 1000);
//   } else {
//     setTimeout(() => {
//       process.stdout.write("\x07");
//       console.log("beeb");
//       i++;
//       return alarm(i);
//     }, input[i] * 1000);
//   }
// };
// alarm();

let input = process.argv.slice(2);
const alarm = () => {
  if (!input.length) {
    return;
  }
  for (number of input) {
    if (isNaN(number)) {
      continue;
    }
    if (Math.sign(number) === -1) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log("beeb");
    }, number * 1000);
  }
};
alarm();
