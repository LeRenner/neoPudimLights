const express = require('express')
const axios = require('axios');
const fs = require('fs');

const app = express()
const port = 3000

// get token from /secret/token.txt
let token = fs.readFileSync('/secret/token', 'utf8');
token = token.replace(/\n$/, "");

console.log("Got token: " + token);

app.get('/1/on', (req, res) => {
	console.log("/1/on");

	const url = 'https://homeassistant.pudim.xyz/api/services/switch/turn_on';
	const headers = {
		'Authorization': 'Bearer ' + token,
		'Content-Type': 'application/json'
	};
	
	const data = {
		entity_id: 'switch.esphome_3223_relay'
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
		entity_id: 'switch.esphome_3223_relay'
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

app.get('/2/on', (req, res) => {
	console.log("/2/on");

	// const url = 'https://homeassistant.pudim.xyz/api/services/switch/turn_on';
	// const headers = {
	// 	'Authorization': 'Bearer ' + token,
	// 	'Content-Type': 'application/json'
	// };
	
	// const data = {
	// 	entity_id: 'switch.relay_1_3'
	// };
	
	// axios.post(url, data, { headers })
	// 	.then(response => {
	// 	console.log('Success:', response.data);
	// 	})
	// 	.catch(error => {
	// 	console.error('Error:', error.response ? error.response.data : error.message);
	// 	});

	res.send('Sucess!');
});

app.get('/2/off', (req, res) => {
	console.log("/2/on");

	// const url = 'https://homeassistant.pudim.xyz/api/services/switch/turn_off';
	// const headers = {
	// 	'Authorization': 'Bearer ' + token,
	// 	'Content-Type': 'application/json'
	// };
	
	// const data = {
	// 	entity_id: 'switch.relay_1_3'
	// };
	
	// axios.post(url, data, { headers })
	// 	.then(response => {
	// 	console.log('Success:', response.data);
	// 	})
	// 	.catch(error => {
	// 	console.error('Error:', error.response ? error.response.data : error.message);
	// 	});
	
	res.send('Sucess!');
});

app.listen(port, () => {
	console.log(`Application listening on port ${port}`)
})
