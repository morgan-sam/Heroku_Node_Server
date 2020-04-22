const { Pool } = require('pg');
const isProduction = process.env.NODE_ENV === 'production';

console.log(`process.env.DATABASE_URL: ${process.env.DATABASE_URL}`);

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env
	.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
	// connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
	connectionString:
		'postgres://wsusdnyyocpmkw:d3bc9b95830acb0634ef7c737332818adcd56c1730db93c3335e34e232de531d@ec2-54-197-48-79.compute-1.amazonaws.com:5432/der2bnubkhio1h',
	ssl: isProduction
});

module.exports = { pool };
