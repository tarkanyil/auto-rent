import mongoose from 'mongoose';
const { Schema } = mongoose;

const FeaturesSchema = new Schema({
  automaticGear: Boolean,
  allWheelDrive: Boolean,
  backupCamera: Boolean,
  blindSpotWarning: Boolean,
  bluetooth: Boolean,
  gps: Boolean,
  heatedSeats: Boolean,
  keylessEntry: Boolean,
  snowTiresOrChains: Boolean,
  sunroof: Boolean,
  usbCharger: Boolean,
  usbInput: Boolean,
  androidAuto: Boolean,
  appleCarPlay: Boolean,
  auxInput: Boolean
});

const AutoSchema = new Schema({
  brand: String,
  model: String,
  subtitle: String,
  description: String,
  path: String,
  images: {
    // imageURLs come here
    type: [String],
    default: undefined
  },
  featurePreview: {
    consumptionLiterPer100km: Number,
    fuelType: String,
    doors: Number,
    seats: Number
  },
  prices: [{ forDays: Number, includedKm: Number, pricePerDay: Number }],
  deposit: Number, // EUR value of deposit
  extras: [
    {
      name: String,
      displayName: String,
      price: Number,
      pricePer: String
    }
  ],
  features: FeaturesSchema, // pre-defined features, that are displayed with proprietary icon on the frontend
  additionalFeatures: [String], // additional features, displayed with a generic icon on the frontend
  guidelines: String
});

// AutoSchema.remove('extras');
// AutoSchema.remove('guideLines');
// AutoSchema.add({ guidelines: 'string' });
// AutoSchema.add({ extras: [{ name: 'string', displayName: 'string', price: 'number', pricePer: 'string' }]});

export default mongoose.models.Auto || mongoose.model('Auto', AutoSchema);
