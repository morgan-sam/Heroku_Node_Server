const { Pool } = require('pg');
require('dotenv').config();
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
	.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const postgresql_DATABASE_URL =
	'postgres://turirlazisuzdc:29fb16330578ba09b2f65ff26905f5beae61a6abdff9f02af7e2e189331f26f0@ec2-18-233-137-77.compute-1.amazonaws.com:5432/d4srjouclc9mgi';

console.log(isProduction);

const pool = new Pool({
	// connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
	connectionString: postgresql_DATABASE_URL,
	ssl: isProduction
});

module.exports = { pool };
