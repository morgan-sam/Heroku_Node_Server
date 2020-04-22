async function getComments() {
	const response = await fetch('https://socialnetworknode.herokuapp.com/comments');
	const comments = await response.json();
	return comments;
}

async function displayComments() {
	const comments = await getComments();
	console.log(comments);
	comments.forEach((el) => {
		const jsDate = new Date(el.time).toString();
		const date = jsDate.split(' ').slice(0, 5).join(' ');
		document.body.innerHTML += `${el.author}&emsp;${date}:<br>${el.comment}`;
	});
}
displayComments();
