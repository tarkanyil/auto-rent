import mongoose from 'mongoose';
const { Schema } = mongoose;

const AttributeSchema = new Schema({
    type: String,
    name: String,
    displayName: String
});

AttributeSchema.add({ description: 'string' });

export default mongoose.models.Attribute || mongoose.model('Attribute', AttributeSchema);