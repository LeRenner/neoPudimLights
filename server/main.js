
const express = require('express')
const axios = require('axios');
const app = express()
const port = 3000

app.get('/1/on', (req, res) => {
    console.log("/1/on");

	const url = 'http://192.168.1.90/switch/relay_1/turn_on';

	axios.post(url)
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});

	res.send('Sucess!');
});

app.get('/1/off', (req, res) => {
	console.log("/1/off");

	const url = 'http://192.168.1.90/switch/relay_1/turn_off';	

	axios.post(url)
		.then(response => {
			console.log(response.data);
		})
		.catch(error => {
			console.log(error);
		});

	res.send('Sucess!');
})

app.listen(port, () => {
	console.log(`Application listening on port ${port}`)
})
