import { MongoClient } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(process.env.MONGODB_URI, {
    tls: true,
    tlsAllowInvalidCertificates: true, // Codesandbox SSL handshake ke liye
  });

  await client.connect();
  const db = client.db(process.env.DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

// Ab getUserByEmail bhi export karo
export async function getUserByEmail(email: string) {
  const { db } = await connectToDatabase();
  return await db.collection("users").findOne({ email });
}
