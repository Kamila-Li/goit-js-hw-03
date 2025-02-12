function makeArray(firstArray, secondArray, maxLength) {
  // Створюємо новий масив, об'єднуючи два масиви
  const combinedArray = firstArray.concat(secondArray);

  // Перевіряємо, чи перевищує довжина нового масиву maxLength
  if (combinedArray.length > maxLength) {
    // Повертаємо копію масиву з довжиною maxLength
    return combinedArray.slice(0, maxLength);
  }

  // Якщо довжина не перевищує maxLength, повертаємо весь масив
  return combinedArray;
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
