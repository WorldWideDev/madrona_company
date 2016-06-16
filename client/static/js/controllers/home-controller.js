myApp.controller('HomeController', function($location, $modal, UserFactory){
    self = this;
    self.event = function(){
        UserFactory.event(function(data){
            self.stuff = data
        })
    }
    self.show = function(data){
        if(data == 'm'){
            $location.url('/madronaco')	
        }else if (data == 'b'){
            $location.url('/bowlinggreen')	
        }else if (data == 'sg'){
            $location.url('/secretgarden')
        }
    }
    self.details = function(){
        $location.url('/secretgarden/details')
    }
    // _src = '/static/img/sg/sg_siteplan_01.jpg'
    self.modalSrc = '/static/img/sg/sg_siteplan_01.jpg'
    self.open = function(data){
        if(data == 0){
             $modal.open({
                templateUrl: 'static/partials/sg_modal.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }else{
             $modal.open({
                templateUrl: 'static/partials/sg_modal1.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }
        
    }
    self.myInterval = 10000;
    self.slides = [
        {image: 'static/img/sg/sg_01.JPG'},
        {image: 'static/img/sg/sg_02.JPG'},
        {image: 'static/img/sg/sg_03.JPG'},
        {image: 'static/img/sg/sg_04.JPG'},
        {image: 'static/img/sg/sg_05.JPG'},
        {image: 'static/img/sg/sg_06.jpg'},
        {image: 'static/img/sg/sg_07.jpg'},
        {image: 'static/img/sg/sg_08.jpg'},
        {image: 'static/img/sg/sg_09.JPG'},
        {image: 'static/img/sg/sg_10.JPG'},
        {image: 'static/img/sg/sg_11.JPG'},
        {image: 'static/img/sg/sg_12.jpg'},
    ];
})