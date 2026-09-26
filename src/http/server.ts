import {Elysia} from 'elysia'
import { drizzle } from 'drizzle-orm/pglite';
const db = drizzle(process.env.DATABASE_URL!);

 const app = new Elysia().get('/', () => {
  return '🔥Hello world🦊'
  
 })

 app.listen(3333, ()=> {
  console.log("🔥 HTTP Server Running!🦊");
  
 })
