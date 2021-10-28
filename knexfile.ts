export default {
  development: {
    client: "pg",
    connection: {
      database: "knex",
      user: "postgres",
      password: "tibbers",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};
