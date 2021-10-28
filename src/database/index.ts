import config from "../../knexfile";
import knexInitiatior from "knex";

const knex = knexInitiatior(config.development);
export default knex;
