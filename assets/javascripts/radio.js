function check()  {

	choosen = ""
	len = document.form1.user[role].length

	for (i = 0; i <len; i++) {
		if (document.form1.user[role][i].checked) {
			choosen = document.form1.user[role][i].value
		}
	}

	if (choosen == "") {
		alert("No Option selected");
		return false;
	}
	else {
		alert("option selected");
		return true;
	}
}

/*function ValidateForm1(form){

	ErrorText= "";
	if ( ( form.user[role][0].checked == false ) || ( form.user[role][1].checked == false ) 
	( form.user[role][2].checked == false ) || ( form.user[role][3].checked == false )
	( form.user[role][4].checked == false )  )
	{
	alert ( "Please choose any of the given Category" );
	return false;
	}
	return true;
}
*/

