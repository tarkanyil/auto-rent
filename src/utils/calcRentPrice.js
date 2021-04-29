const calcRentPrice = ({ priceArray, lengthRent }) => {

  // sorting priceArray based on the forDays key (for cases when database input is not is ascending order)
  function compare(a, b) {
    const A = a.forDays;
    const B = b.forDays;
    let comparison = 0;
    if (A > B) {
      comparison = 1;
    } else if (A < B) {
      comparison = -1;
    }
    return comparison;
  }
  priceArray.sort(compare);

  // defining pricePerDay for the rental period
  let pricePerDay = priceArray[0].pricePerDay;
  let includedKm = priceArray[0].includedKm;
  for (let i = 1; i < priceArray.length; i++) {
    if (priceArray[i].forDays <= lengthRent) {
      pricePerDay = priceArray[i].pricePerDay;
      includedKm = priceArray[i].includedKm;
    } else {
      break;
    }
  }

  console.log(pricePerDay);

  const result = {
    pricePerDay: pricePerDay,
    priceTotal: pricePerDay * lengthRent,
    includedKm: includedKm
  };

  return result;
};

export default calcRentPrice;
