function fibs(num) {
  const fibonacci = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      fibonacci.push(i);
    } else {
      fibonacci.push(
        fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
      );
    }
  }

  return fibonacci;
}

// eslint-disable-next-line no-console
console.log(fibs(8));
