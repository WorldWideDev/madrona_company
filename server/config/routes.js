var mongoose = require('mongoose');
var User = mongoose.model('User');

var users = require('../controllers/users.js')

module.exports = function(app){
	app.get('/users/event', function (req,res){
		console.log('in user index routes')
		users.event(req,res);
	})
}