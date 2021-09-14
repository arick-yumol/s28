// API (Application Programming Interface) - part of a server responsible for receiving requests and sending responses.
// hides the server beneath an interface layer. hidden complexity makes app easier to use. sets the rules of interaction between front and back ends of an application, improving security
// e.g. Just as a bank teller stands between a customer and the bank's vault, an API acts as the middleman between the front and back ends of an application
// customer(front-end) ----> bank teller (API) <---- vault (back-end)

// "POST" and "PUT" - use body


// Javascript is by default a synchronous behavior (one at a time from top to bottom). Meaning that only one statement is executed at a time.

console.log(`Hello World`);
console.log(`Hello Again`);

// for (let i = 0; i <= 1500; i++) {
// 	console.log(`${i}`);
// }

console.log(`Goodbye`);

// when an action will take some time to process, this result in code is called "blocking"
// Blocking - is when the execution of a certain statement process must wait until the operation completes.

// ASYNCHRONOUS means that we can proceed to execute other statements, while time consuming code is running in the background.

// setTimeout()	//puts a delay (in ms) making it asychronous

// console.log(`Hello`);
// setTimeout(function(){
// 	console.log(`John`);
// }, 2000)
// console.log("I am")

// The PROMISE object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Has 3 states, namely, FULFILLED, REJECTED (FAILED), PENDING

// fetch() - used to fetch the API. is a method in JS, which allows to send a request to an API and process its response
console.log(fetch(`https://jsonplaceholder.typicode.com/posts`))


/*
fetch syntax:

fetch(url, {options})
// url = the url found in our server(routes or endpoints)
// options = headers(status, content-type), methods(GET, POST, PUT, DELETE)

.then( response => reponse.json())	// = parse then response as a JSON object. makes is asynchronous
.then( data => {
	console.log(data)
})	// process the result
*/

/*
// Retrieves all posts following the Rest API (retrieve, /posts, GET)
// By using the .then method, we can now check for the status of the promuise
fetch(`https://jsonplaceholder.typicode.com/posts`)
// The "fetch" method will return a "promise" that resolves to a "response" object.
// The "then" method capture "response" object and returns another "promise" which eventually be "resolved" or "rejected"
.then(response => response.json())
.then(json => console.log(json))
*/

// The 'async' and 'await' keywords is another approach that can ve used to achieve asynchronous code.
// Used in function to indicate which portions of code should be waited for
// Creates an asynchronous function


/*
async function fetchData(){		//when using fetch, always convert to JSON to be readable in the client side

	// waits for the "fetch" method to complete then stores the value in the 'result' variable
	let result = await fetch('https://jsonplaceholder.typicode.com/posts');	//await cannot be used unless an async function is present
	// Result returned by fetch is a promise
	console.log(result);
	// The returned "promise/response" is an object
	console.log(typeof result);
	let json = await result.json();

	console.log(json);
}

fetchData();
*/


// // Retrieves a specific post
// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(response => response.json())
// .then(json => console.log(json))


// async function fetchData(){
// 	let result = await fetch("https://jsonplaceholder.typicode.com/posts/3");
// 	let json = await result.json();

// 	console.log(json);
// }

// fetchData();


// Get a post 	(GET)
fetch(`https://jsonplaceholder.typicode.com/posts/3`)
.then(response => response.json())
.then(json => console.log(json))


// Creates a new post 	(POST)
fetch(`https://jsonplaceholder.typicode.com/posts`, {
	// Sets the method of the "request" object to "post" the following REST API
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	// Sets the content/body data of the 'request' object to be sent to the backend
	// JSON.stringify converts the JSON object data into a stringified JSON
	body: JSON.stringify({
		userId: 1,
		title: 'New Post',
		body: 'Hello World!'
	})
})
.then(res => res.json())
.then(data => console.log(data))


// Update a specific post 	(PUT - is a method of modifying resource where the client sends data that updates the ENTIRE resources. It is used to set an entity's information completely)
fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 1,
		title: 'Updated post',
		body: 'Hello again'
	})
})
.then(res => res.json())
.then(data => console.log(data))


// Partial update a post (PATCH - is a method that applies a partial update to the resource)
fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 1,
		title: 'Updated blog post'
	})
})
.then(res => res.json())
.then(data => console.log(data))


// Delete a post (DELETE)
fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
	method: 'DELETE',
})
.then(res => res.json())
.then(data => console.log(data))


// Filtering posts

// The data can be filtered by sending the userId along with the URL

// Syntax
	// Individual Parameters
		// 'url?parameterName=value'
fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
.then(res => res.json())
.then(data => console.log(data))

	// Multiple Parameters
		// 'url?paramA=valueA&paramB=valueB'
fetch(`https://jsonplaceholder.typicode.com/posts?userId=1&userId=2`)
.then(res => res.json())
.then(data => console.log(data))

// The question mark (?) symbol at the end of URL indicates that parameters will be sent to the endpoint.


// Retrieving nested/related comments to posts
// Retrieves comments for a specific post
fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`)
.then(res => res.json())
.then(data => console.log(data))


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
	let list = data.map(post => {
		return post.userId
	})
	console.log(list)
})
