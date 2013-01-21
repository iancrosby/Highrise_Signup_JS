

function addToHighrise(first_name, last_name, e_mail, company, country) {

// $.getJSON('http://sheltered-island-3519.herokuapp.com' + '/add_to_highrise', {
$.getJSON($SCRIPT_ROOT + '/add_to_highrise', {
	first_name: first_name,
	last_name: last_name,
	e_mail: e_mail,
	company: company,
	country: country
	}, function() {
	});

};
	
addToHighrise("Ian", "Crosby", "a@a.a", "USCo", "USofA")

