let array = [];
let counter = 0;
loop();

function loop() {
  setTimeout(() => {
    console.log(counter);
    array.unshift(counter);
    if (array.length === 10) {
      array.pop();
    }
    console.log(array);
    counter++;

    loop();
  }, 500);
}
