import calcRentPrice from '../../src/utils/calcRentPrice';

export default async (req, res) => {
  // const calc = calcRentPrice(req.query.days);
  // const calc = {
  //     pricePerDay: 15,
  //     priceTotal: 30
  // }
  // const result = {
  //     pricePerDay: calc.pricePerDay,
  //     priceTotal: calc.priceTotal
  // }

  const lengthRent = 12;
  const priceArray = [
    { forDays: 1, includedKm: 100, pricePerDay: 125 },
    { forDays: 3, includedKm: 250, pricePerDay: 100 },
    { forDays: 7, includedKm: 500, pricePerDay: 80 },
    { forDays: 14, includedKm: 1000, pricePerDay: 70 },
    { forDays: 30, includedKm: 2000, pricePerDay: 60 }
  ];

  const result = calcRentPrice({ priceArray, lengthRent });

  res.send(result);
};
