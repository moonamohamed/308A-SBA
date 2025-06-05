const url = 'https://geek-jokes.sameerkumar.website/api?format=json';
const options = {
	method: 'GET'

}
// 	headers: {
// 		'x-rapidapi-key': '236e810a85msh3c07efd6077ebc7p1e1626jsn0a492c5f13d4',
// 		'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
// 	}
// };

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
// console.log(result)
export async function displayJoke() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		let joke = document.querySelector("#displayJoke")
		joke.innerText = result.joke
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
const myTimeout = setTimeout(displayJoke, 5000);