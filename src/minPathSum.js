// Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right, 
// which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  // Initialize the DP table with the first row and column
  const dp = new Array(m).fill().map(() => new Array(n));
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Fill up the rest of the DP table using recurrence relation
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // Return the minimum sum path from top-left to bottom-right
  return dp[m - 1][n - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]));
console.log(minPathSum([[1, 2], [1, 1]]));
