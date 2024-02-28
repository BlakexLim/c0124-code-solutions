const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((value) => console.log('In order:', value));

values.forEach((value, index, array) =>
  console.log('Reverse order:', array[array.length - 1 - index])
);
