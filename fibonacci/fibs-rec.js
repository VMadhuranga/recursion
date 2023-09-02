function fibsRec(num) {
  if (num === 2) {
    return [0, 1];
  }

  const fibonacci = fibsRec(num - 1);
  fibonacci.push(
    fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1],
  );

  return fibonacci;
}

console.log(fibsRec(8));
