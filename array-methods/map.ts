const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceMap = prices.map((value) => ({
  price: value,
  salePrice: value / 2,
}));
console.log('Price objects', priceMap);

const priceArr = prices.map((value) => `$${value}`);
console.log('Formatted prices', priceArr);
