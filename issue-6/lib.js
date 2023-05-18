let getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
}

let generateArray = () => {
   return [getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()];
}

// Define a function that takes an array as an argument and uses a while loop to console.log whether each item in the array is even or odd
let logArray = (array) => {
  let index = 0;
  while (index < array.length) {
    let number = array[index];
    let oddOrEven = '';

    if (number % 2 === 0) {
      oddOrEven = 'even.';
    } else {
      oddOrEven = 'odd.';
    }

    console.log(`The number ${number} is ${oddOrEven}`)

    index++;
  }
}