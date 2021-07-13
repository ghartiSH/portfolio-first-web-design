
function validateForm() {
				var fname = document.forms.feedbackForm.firstname.value;
				var lname = document.forms.feedbackForm.lastnamevalue;
				var email = document.forms.feedbackForm.email.value;
				var message = document.forms.feedbackForm.feedback.value;

				if (fname == "" || lname == "" || message == "" || email == ""){
					alert("Empty fields found. Please fill the form.");
				}
				else {
					alert("Thank you for the feedback.");
				}
			}