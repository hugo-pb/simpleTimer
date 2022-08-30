let input = process.argv.slice(2);
input = input.sort((a, b) => {
  return a - b;
});

const alarm = (i = 0) => {
  // No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
  if (!input) {
    return;
  }
  if (i > input.length - 1) {
    return;
  }
if ()
  // An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
  // An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
  if (i === 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
      i++;
      return alarm(i);
    }, input[i] * 1000);
  } else {
    setTimeout(() => {
      process.stdout.write("\x07");
      i++;
      return alarm(i);
    }, (input[i] - input[i - 1]) * 1000);
  }
};
alarm();
