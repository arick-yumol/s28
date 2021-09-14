// #3. Create a fetch request using the GET method that will retrieve all the to do list items from JSON Placeholder API.
fetch(`https://jsonplaceholder.typicode.com/todos`)
.then(response => response.json())
.then(json => console.log(json))


// #4. Using the data retrieved, create an array using the map method to return just the title of every item and print the result in the console.
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
	let list = data.map(post => {
		return post.title
	})
	console.log(list)
})


// #5. Create a fetch request using the GET method that will retrieve a single to do list item from JSON Placeholder API.
// #6. Using the data retrieved, print a message in the console that will provide the title and status of the to do list item.
fetch(`https://jsonplaceholder.typicode.com/todos/1`, {
	method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data.title, data.completed))


// #7. Create a fetch request using the POST method that will create a to do list item using the JSON Placeholder API.
fetch(`https://jsonplaceholder.typicode.com/todos`, {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 1,
		title: 'Created a to do list item using POST method',
		completed: true
	})
})
.then(response => response.json())
.then(data => console.log(data))


// #8. Create a fetch request using the PUT method that will update a to do list item using the JSON Placeholder API.
// #9. Update a to do list item by changing the data structure to contain the following properties:
fetch(`https://jsonplaceholder.typicode.com/todos/3`, {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 1,
		title: 'Updated the title',
		description: 'Use the PUT method to update the body tag',
		status: 'incomplete',
		date_completed: '2021 Sept 15'
	})
})
.then(response => response.json())
.then(data => console.log(data))


// #10. Create a fetch request using the PATCH method that will update a to do list item using the JSON Placeholder API.
// #11. Update a to do list item by changing the status to complete and add a date when the status was changed.
fetch(`https://jsonplaceholder.typicode.com/todos/5`, {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 1,
		status: 'completed',
		date_completed: '14 Sept 2021'
	})
})
.then(response => response.json())
.then(data => console.log(data))


// #12. Create a fetch request using the DELETE method that will delete an item using the JSON Placeholder API.
fetch(`https://jsonplaceholder.typicode.com/todos/3`, {
	method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log(data))