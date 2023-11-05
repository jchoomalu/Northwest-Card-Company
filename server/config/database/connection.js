import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://jasonhoomalu:Goninja.44b@cluster0.ym5m4p6.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB: ' + error);
});

export default mongoose.connection