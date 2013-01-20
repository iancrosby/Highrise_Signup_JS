function addToHighrise() {

alert("Function started")

$.getJSON($SCRIPT_ROOT + '/add_hr', {
	name: "test_name"
	}, function() {
		alert("success")
	});

alert("Function ended")

};
	
// first_name, last_name, e_mail, company, country