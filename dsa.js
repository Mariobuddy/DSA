const rotate90 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      [arr[j][i], arr[i][j]] = [arr[i][j], arr[j][i]];
    }
  }
  return arr;
};

console.log(
  rotate90([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
