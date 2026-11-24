import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

if (uri) {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(uri, options);
    }
    client = global._mongoClient;
  } else {
    client = new MongoClient(uri, options);
  }
} else {
  // Safe fallback client during build time analysis
  const placeholderUri = "mongodb://127.0.0.1:27017/skysuite_build";
  client = new MongoClient(placeholderUri, options);
}

export default client;
