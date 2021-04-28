import Auto from '../models/Auto';

const addNewCar = async () => {
  // new car document
  const car = new Auto({
    brand: 'Porsche',
    model: '91111111',
    subtitle: 'Cabriolet',
    description:
      'Wer einen Tesla Model S mit unglaublichen 772 PS mal ausführlich testen möchte ist hier genau richtig. Eine detaillierte Einweisung und ein paar Alltagserfahrung meinerseits, gibt es inklusive.',
    path: 'porsche-911-cabriolet',
      images: [
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1541446654331-def41325e92c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ],
    featurePreview: {
      consumptionLiterPer100km: 11.8,
      fuelType: 'Gas',
      doors: 4,
      seats: 5
    },
    prices: [
      { forDays: 1, includedKm: 100, pricePerDay: 125 },
      { forDays: 3, includedKm: 250, pricePerDay: 100 },
      { forDays: 7, includedKm: 500, pricePerDay: 80 },
      { forDays: 14, includedKm: 1000, pricePerDay: 70 },
      { forDays: 30, includedKm: 2000, pricePerDay: 60 }
    ],
    deposit: 1000, // EUR value of deposit
    extras: [
      { name: 'cleaning', displayName: 'Cleaning', price: '25', pricePer: 'trip' },
      { name: 'extraKm', displayName: 'Additional mileage', price: '75', pricePer: '100km' }
    ],
    features: {
      // pre-defined features, that are displayed with proprietary icon on the frontend
      automaticGear: true,
      allWheelDrive: true,
      backupCamera: true,
      blindSpotWarning: true,
      bluetooth: true,
      gps: true,
      heatedSeats: true,
      keylessEntry: true,
      snowTiresOrChains: true,
      sunroof: true,
      usbCharger: true,
      usbInput: true,
      androidAuto: true,
      appleCarPlay: true,
      auxInput: true
    },
    additionalFeatures: ['additional feature 1', 'additional feature 2'], // additional features, displayed with a generic icon on the frontend
    guidelines: 'Guidelines text value'
  });
  car.save((err) => {
    if (err) return console.log(err);
    console.log('car saved!');
  });
};

export default addNewCar;
