const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => {
  const resp = arr.reduce((acc, curr) => `${acc} ${curr}`)
  return resp.split()
}

console.log(flatten(arrays))

