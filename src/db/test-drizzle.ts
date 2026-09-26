import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connection = postgres(
  "postgres://docker:docker@localhost:5432/pizza_shop"
);

const db = drizzle(connection);

const result = await db.execute(`
  SELECT current_user, current_database()
`);

console.log(result);

await connection.end();