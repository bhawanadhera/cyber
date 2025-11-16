// lib/db.ts
import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DB_NAME as string; // you shared DB_NAME; use that name

if (!uri) throw new Error("MONGODB_URI is not set");
if (!dbName) throw new Error("DB_NAME is not set");

type Cached = {
  client: MongoClient | null;
  promise: Promise<MongoClient> | null;
};
const globalForMongo = globalThis as unknown as { _mongo?: Cached };
const cached: Cached = globalForMongo._mongo ?? { client: null, promise: null };
globalForMongo._mongo = cached;

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  if (cached.client) {
    return { client: cached.client, db: cached.client.db(dbName) };
  }
  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri);
  }
  const client = await cached.promise;
  cached.client = client;
  return { client, db: client.db(dbName) };
}
