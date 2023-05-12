//import { My_API_Key } from "./config.js";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '064d3ec5cemsh1d061e2a204055bp152eb0jsn68006afb9bb8', //changed
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
       // console.log(response.content) //newly added
    document.getElementById('quote').innerHTML = response.content; //added
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -'; //added
})
	.catch(err => console.error(err));