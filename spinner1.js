let j;
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    process.stdout.write("\r|   ");
  }, 100 + 1000 * i);

  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, 300 + 1000 * i);

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, 500 + 1000 * i);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r\\   ");
  }, 700 + 1000 * i);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write("\r|   ");
  }, 900 + 1000 * i);
  j = i + 1;
}
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  //process.stdout.write("\r\n  ");
  console.log();
}, j * 1000);
