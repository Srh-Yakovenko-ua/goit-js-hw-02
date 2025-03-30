function getShippingCost(country) {
  const shippingRates = {
    China: 100,
    Chile: 250,
    Australia: 170,
    Jamaica: 120,
  };
  const price = shippingRates[country];

  if (!!price) return `Shipping to ${country} will cost ${price} credits`;

  return 'Sorry, there is no delivery to your country';
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
