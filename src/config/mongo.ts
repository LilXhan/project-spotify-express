import mongoose from 'mongoose';

const dbConnect = async () => {
  const DB_URI = process.env.DB_URI;
  await mongoose.connect(DB_URI!);
};

export default dbConnect;