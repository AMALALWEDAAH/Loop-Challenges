//Print odds 1-20
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//Decreasing Multiples of 3
for (var i = 0; i < 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//Print the sequence
for (var i = -5; i < 5; i += 1.5) {
  if (i > -4) {
    console.log(i);
  }
}
//Sigma
var sum = 0;
for (var i = 1; i < 101; i++) {
  sum += i;
}
console.log(sum);
//Factorial
var product = 1;
for (var i = 1; i < 13; i++) {
  product *= i;
}
console.log(product);
