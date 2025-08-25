import mongoose from "mongoose";
import config from "./config";
 

declare global {
  var _mongo: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const globalAny: any = global;

if (!globalAny._mongo) {
  globalAny._mongo = { conn: null, promise: null };
}

const connectDB = async () => {
  if (globalAny._mongo.conn) return globalAny._mongo.conn;

  if (!globalAny._mongo.promise) {
    globalAny._mongo.promise = mongoose.connect(config.database_url, {
      bufferCommands: false,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 30000,
    });
  }

  globalAny._mongo.conn = await globalAny._mongo.promise;
  return globalAny._mongo.conn;
};

export default connectDB;
