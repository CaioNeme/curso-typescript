import pg from "pg";

const {Pool} = pg

const connection = new Pool({
  user: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  database: "aula_ts_11"
})

export { connection }