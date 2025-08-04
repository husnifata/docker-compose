import { Hono } from "hono";
import sql from "./db";

const app = new Hono();

app.get("/", async (c) => {
  const result = await sql`SELECT 'Halo dari PostgreSQL!' as greeting`;
  return c.text(result[0].greeting);
});

Bun.serve({
  fetch: app.fetch,
  port: 3000,
});
