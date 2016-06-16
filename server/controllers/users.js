var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		index: function(req,res){
			User.find({}, function (err,users){
				if(err){
					res.json(err);
				}else{
					res.json(users);
				}
			})
			console.log('in user index controller')
		},
        event: function(req, res){
            res.json({data: 'event worked'})
        }
	}
})()