import { connectToDatabase } from "./db"; // already export hai

// Users collection me naya user create karne ka function
export async function createUser(userData: {
  email: string;
  password: string;
  name?: string;
}) {
  const { db } = await connectToDatabase();

  // Check if user already exists (optional)
  const existingUser = await db
    .collection("users")
    .findOne({ email: userData.email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const result = await db.collection("users").insertOne(userData);
  return result;
}
