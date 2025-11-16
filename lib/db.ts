import { MongoClient, type Db } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  try {
    const client = new MongoClient(MONGODB_URI)
    await client.connect()
    const db = client.db(DB_NAME)

    cachedClient = client
    cachedDb = db

    return { client, db }
  } catch (error) {
    console.error("MongoDB connection error:", error)
    throw error
  }
}

export async function getUserByEmail(email: string) {
  const { db } = await connectToDatabase()
  const user = await db.collection("users").findOne({ email })
  return user
}

export async function getUserById(userId: string) {
  const { db } = await connectToDatabase()
  const { ObjectId } = await import("mongodb")
  const user = await db.collection("users").findOne({ _id: new ObjectId(userId) })
  return user
}

export async function createUser(email: string, password: string) {
  const { db } = await connectToDatabase()
  const result = await db.collection("users").insertOne({
    email,
    password,
    createdAt: new Date(),
  })
  return result.insertedId.toString()
}
