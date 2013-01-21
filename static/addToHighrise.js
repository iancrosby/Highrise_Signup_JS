

function addToHighrise(name, email, company, country) {

// $.getJSON('http://sheltered-island-3519.herokuapp.com' + '/add_to_highrise', {
$.getJSON($SCRIPT_ROOT + '/add_to_highrise', {
	name: name,
	email: email,
	company: company,
	country: country
	}, function() {
	});

};
	
addToHighrise("Ian Crosby", "a@a.cc", "USCo", "USofA")

