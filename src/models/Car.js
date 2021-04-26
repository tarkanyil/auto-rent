import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    model: {
        type: String
    },
    myPath: {
        type: String
    }
});

export default mongoose.models.Car || mongoose.model('Car', CarSchema);