function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let email = document.forms["myForm"]["email"].value;
  let age = document.forms["myForm"]["age"].value;
  let fav_music = document.forms["myForm"]["fav_music"].value;
  let musicSearch = document.forms["myForm"]["musicSearch"].value;
  
  if (fname == "") {
    alert("Name must be filled out");
    return false;
  }
	  
	if(lname==""){
		alert("Last name must be filled out");
		return false;
	}
	
	if(email==""){
		alert("email must be filled out");
		return false;
	}
	
	if(age==""){
		alert("Age must be filled out");
		return false;
	}
	
	if(fav_music==""){
		alert("Favourite music must be filled out");
		return false;
	}
	
	if(musicSearch==""){
		alert("Music Search must be filled out");
		return false;
	}
}