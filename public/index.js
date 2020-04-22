async function getComments() {
	const response = await fetch('https://socialnetworknode.herokuapp.com/comments');
	const comments = await response.json();
	return comments;
}

async function displayComments() {
	const comments = await getComments();
	if (comments) {
		comments.forEach((el) => {
			const jsDate = new Date(el.time).toString();
			const formatDate = jsDate.split(' ').slice(0, 5).join(' ');
			document.body.innerHTML += `${el.author}&emsp;${formatDate}:<br>${el.comment}<br><br>`;
		});
	}
}

function addForms() {
	document.body.innerHTML += `<form onsubmit="event.preventDefault(); return postComment();" >
	<label for="name">Name:</label><br>
	<input type="text" id="name" name="name"><br>
	<label for="comment">Comment:</label><br>
	<input type="text" id="comment" name="comment">
	<input type="submit" style="display: none" />
  	</form><br>`;
	document.body.innerHTML += `<button type="button" onclick="postComment()">Add comment</button><br><br>`;
}

async function postComment(e) {
	const newComment = {
		author: document.getElementById('name').value,
		comment: document.getElementById('comment').value
	};

	try {
		if (newComment.author && newComment.comment) {
			const response = await fetch('https://socialnetworknode.herokuapp.com/comments', {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'post',
				body: JSON.stringify(newComment)
			});
			location.reload();
		}
	} catch (error) {
		console.log(error);
	}
}

addForms();
displayComments();
