function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE; // Initialize minPrice to a very large number
  let maxProfit = 0; // Initialize maxProfit to 0

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // Update minPrice if the current price is lower than what we have seen so far
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      // If the current price minus the minPrice seen so far is greater than maxProfit, update maxProfit
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit; // Return the maximum profit found
}
