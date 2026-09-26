import postgres from "postgres";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { env } from "../../env";

import chalk from 'chalk'

const connection = postgres(env.DATABASE_URL!, {
  max: 1,
});

const db = drizzle(connection);

await migrate(db, {
  migrationsFolder: "./migrations",

  
});
console.log(chalk.greenBright('Migracao aplicadas com sucesso'));

await connection.end();