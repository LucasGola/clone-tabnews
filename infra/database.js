import pg from "pg";

const { Client } = pg;

async function query(queryObject) {
  /*   console.log({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.SSL === "development" ? false : true,
  }); */

  // console.log(`node env = ${process.env.ENVIRONMENT}`);

  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.ENVIRONMENT === "development" ? false : true,
    enableChannelBinding: true,
  });

  /* const client = new Client({
    connectionString:
      "postgresql://neondb_owner:npg_n0oaiDKSypA5@ep-royal-lake-aqhk325v.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  }); */

  try {
    await client.connect();
    return await client.query(queryObject);
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query,
};
