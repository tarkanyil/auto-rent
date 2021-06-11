import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  uidFirebase: String,
  nameFirst: String,
  nameLast: String,
  phone: String,
  email: String,
  dateOfBirth: Date,
  driversLicence: {
    id: String,
    isEuLicence: Boolean
  },
  numberIdCard: String,
  address: {
      street: String,
      city: String,
      country: String,
      zipCode: String
  }
});

export default mongoose.models.Userrr || mongoose.model('Userrr', UserSchema);
