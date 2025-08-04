import { Hono } from "hono";
import sql from "./db";

const app = new Hono();

app.get("/", async (c) => {
  const result = await sql`SELECT 'Halo dari PostgreSQL!' as greeting`;
  return c.text(result[0].greeting);
});

export default app;
