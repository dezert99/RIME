// document.addEventListener('load', function(){
// 	var signUpButton = document.getElementById('login');
// 	signUpButton.addEventListener('click', login);
// })

function login(){
	username = document.getElementById('username');
	password = document.getElementById('password');
	Parse.User.logIn(username, password, {
	  success: function(user) {
	    // Will this work on Phonegap?
	    console.log('HELL YEA');
	    document.location.href = 'nav2.html';
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	    console.log('didnt work '+error.code); 
	    login()
	  }
	});
}