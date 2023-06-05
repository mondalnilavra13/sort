function findDifference(numbers) {
  // Sort the numbers in descending order
  const sortedNumbers = numbers.sort((a, b) => b - a);

  // Calculate the difference between the two biggest numbers
  const difference = sortedNumbers[0] - sortedNumbers[1];

  return difference;
}
const numbers = [10, 5, 8, 20, 3];
const difference = findDifference(numbers);
console.log(difference); // Output: 10
