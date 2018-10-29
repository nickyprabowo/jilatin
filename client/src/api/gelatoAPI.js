const url = "http://localhost:5000/api/gelato"
export const getGelatos = () => {
	return fetch(url, {method: 'GET'})
}

export const addGelato = (data) => {
	return fetch(url, {
		method: 'POST',
		body: data
	})
}