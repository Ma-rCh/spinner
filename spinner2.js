let j = 0;
const str = "|/-\\|/-\\|";
for (let i of str) {
  j++;
  setTimeout(() => {
    process.stdout.write("\r" + i + "   ");
  }, 100 + 200 * j);
}
setTimeout(() => {
  console.log();
}, 200 + j * 200);
