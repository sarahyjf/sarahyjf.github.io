function askquest() {


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?')

	var fullName = firstName + ' ' + lastName
	console.log('User is called ' + fullName)

	var age = prompt('How old are you?');
	age = parseInt(age);
	console.log(age)

	if (age >=18) {
		console.log('User is an adult')
	} else if (age>=13) {
		console.log('User is a teenager')
	} else {
		console.log('User is a child')
	}

	var favcolor = prompt('What is your favourite colour?');
	favcolor = favcolor.toLowerCase(); //save input to lower case over original input

	if (favcolor == 'red' ||
		favcolor == 'blue' ||
		favcolor == 'green' ||
		favcolor == 'yellow') {
		$('h1').css('color', favcolor);
	}

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly'
		) {console.log('Hello ' + firstName + ' ' + lastName)
	} else {console.log("You are worthless")}
}


//if (day=='Tuesday' || (month == 'September' && year == 2017)) {}

//Functions are like variables but they store bits of code rather than strings or integers

//When the page loads
$(function() {
	$('img').on('click', askquest);



	//When the user clicks on h3
	$('h3').on('click', function() {

/*goes through the document looking for h3*/

		//Toggle the next element
		$(this).toggleClass('open').next().slideToggle(500);


	});

});
/*Hey Jquery, do this*/
/*semicolon like a full stop*/
//every bracket has a matching partner
//close curly bracket before the round bracket, always