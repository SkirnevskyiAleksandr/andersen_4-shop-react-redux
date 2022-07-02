export const basketItemsSum = (arr) => {
  let counter = 0;

  arr.map((item) => {
    counter += item.price;
  });

  return counter;
};