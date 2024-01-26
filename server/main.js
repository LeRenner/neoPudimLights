const express = require('express')
const axios = require('axios');
const fs = require('fs');

const app = express()
const port = 3000

// get token from /secret/token.txt
const token = fs.readFileSync('/secret/token.txt', 'utf8');

app.get('/1/on', (req, res) => {
	console.log("/1/on");

	const url = 'https://homeassistant.pudim.xyz/api/services/switch/turn_on';
	const headers = {
		'Authorization': 'Bearer ' + token,
		'Content-Type': 'application/json'
	};
	
	const data = {
		entity_id: 'switch.relay_1'
	};
	
	axios.post(url, data, { headers })
		.then(response => {
		console.log('Success:', response.data);
		})
		.catch(error => {
		console.error('Error:', error.response ? error.response.data : error.message);
		});

	res.send('Sucess!');
});

app.get('/1/off', (req, res) => {
	console.log("/1/on");

	const url = 'https://homeassistant.pudim.xyz/api/services/switch/turn_off';
	const headers = {
		'Authorization': 'Bearer ' + token,
		'Content-Type': 'application/json'
	};
	
	const data = {
		entity_id: 'switch.relay_1'
	};
	
	axios.post(url, data, { headers })
		.then(response => {
		console.log('Success:', response.data);
		})
		.catch(error => {
		console.error('Error:', error.response ? error.response.data : error.message);
		});
	
	res.send('Sucess!');
});

app.listen(port, () => {
	console.log(`Application listening on port ${port}`)
})
