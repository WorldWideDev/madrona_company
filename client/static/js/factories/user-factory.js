myApp.factory('UserFactory', function($http){
    var factory = {}
    factory.event = function(callback){
        $http.get('/users/event').success(function(data){
            callback(data)
        })
    }
    return factory
})