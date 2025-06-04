const url = 'https://quotes-api12.p.rapidapi.com/dev-jokes?category=all&subcategory=javascript';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '236e810a85msh3c07efd6077ebc7p1e1626jsn0a492c5f13d4',
		'x-rapidapi-host': 'quotes-api12.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}