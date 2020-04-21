const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { pool } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getComments = (request, response) => {
	pool.query('SELECT * FROM comments', (error, results) => {
		if (error) throw error;
		response.status(200).json(results.rows);
	});
};

const addComment = (request, response) => {
	const { author, comment } = request.body;
	pool.query('INSERT INTO comments (author,comment) VALUES ($1, $2)', [ author, comment ], (error) => {
		if (error) throw error;
		response.status(201).json({ status: 'success', message: 'Comment posted.' });
	});
};

// app.route('/comments').get(getComments).post(addComment);

app.listen(process.env.PORT, () => {
	console.log(`Server Listening on port ${process.env.PORT}\n`);
});

app.get('/', (request, response) => {
	response.status(200).json('This is the server root.');
});

app.get('/comments', (request, response) => {
	response.status(200).json('This is where the database will be.');
});
