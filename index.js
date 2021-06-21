// Naive solution (will time out for larger numbers)
function isPrime(num) {
  //TODO
  for (var i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

function optimizePrime(num) {
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const sqr = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= sqr; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) {
      return false; // modulo shows a divisor was found
    }
  }
  return true;
}
