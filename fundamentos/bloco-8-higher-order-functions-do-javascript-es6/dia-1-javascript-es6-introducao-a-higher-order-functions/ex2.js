const numberCheck = (myNumber, number) => myNumber === number;

const loterryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() *5) + 1)
  return callback(myNumber, number) ? 'Lucky day' : 'Try again';
}

console.log(loterryResult(2, numberCheck))