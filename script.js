const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '236e810a85msh3c07efd6077ebc7p1e1626jsn0a492c5f13d4',
		'x-rapidapi-host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}