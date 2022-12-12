function validate(){ //geting the element of id and make it variable
	var name = document.getElementById("name").value; //getting the value in the html and make it variable in java script
	var subject = document.getElementById("subject").value;//getting the value in the html and make it variable in java script
	var phone = document.getElementById("phone").value;//getting the value in the html and make it variable in java script
	var email = document.getElementById("email").value;//getting the value in the html and make it variable in java script
	var message = document.getElementById("message").value;//getting the value in the html and make it variable in java script
	var error_message = document.getElementById("error_message");//getting the value in the html and make it variable in java script
	
		error_message.style.padding = "10px";//if there's error it will expand the padding to 10 and input what is the error
		var text;
		if(name.length < 5){ //the name length must be higher than 5
			text = "Please Enter Valid Name"; //it will print on the expanded padding if there's error in name
			error_message.innerHTML = text; // rewriting or changing the text to specific character
			return false; //if it is false it will loop again but if it is true it will continue
		}
		if(subject.length < 10){//the subject length must be higher than 10
			text = "Please Enter Correct Subject";//it will print on the expanded padding if there's error in name
			error_message.innerHTML = text;// rewriting or changing the text to specific character
			return false;//if it is false it will loop again but if it is true it will continue
		}
		if(isNaN(phone) || phone.length != 10){//the phone length must be exactly 10 digits number
			text = "Please Enter Valid Phone Name";//it will print on the expanded padding if there's error in name
			error_message.innerHTML = text;// rewriting or changing the text to specific character
			return false;//if it is false it will loop again but if it is true it will continue
		}
		if(email.indexOf("@") == -1 || email.length < 6){//the email length must be higher than 6 and have index @
			text = "Please Enter Valid Email";//it will print on the expanded padding if there's error in name
			error_message.innerHTML = text;// rewriting or changing the text to specific character
			return false;//if it is false it will loop again but if it is true it will continue
		}
		if(message.length < 20){//the message length must be higher than 20
			text = "Please Enter More Than 20 Characters";//it will print on the expanded padding if there's error in name
			error_message.innerHTML = text;// rewriting or changing the text to specific character
			return false;
		}
		alert("Form Submitted Successfully");//if the loop finish and no more errors
		return true;//if it is false it will loop again but if it is true it will execute the javascript via alert

		}

		function clickme(){ //this function change the printed text to specified text that inputted in a that when 
								//you click the buy button that have function onclick it will process to change the text
				var a = document.getElementById("order");//getting the value in the html and make it variable in java script
				a.innerHTML = " The Food Was Successfully Bought";
			}

		function book(){alert("The table Booking Sucessfully Click Ok To Fisnish Table Booking")
		}//the function was printing the alert to notify that the table booking is successfull


function toggle(){
		var header = document.getElementById("header")//the function of this is to make the toggle active when its click
		header.classList.toggle('active')
	}