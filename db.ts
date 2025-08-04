import postgres from "postgres";

const sql = postgres({
  host: "db",
  port: 5432,
  database: "mydb",
  username: "myuser",
  password: "mypassword",
});

export default sql;
