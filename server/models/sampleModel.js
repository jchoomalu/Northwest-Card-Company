import mongoose from 'mongoose'

const sampleSchema = new mongoose.Schema({
  name: String,
});

const SampleModel = mongoose.model('Sample', sampleSchema);

export default SampleModel;
