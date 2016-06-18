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
        }else if (data == 'mil'){
            $location.url('/miller')
        }else if (data == 'yes'){
            $location.url('/yesler')
        }else if (data == 'tem'){
            $location.url('/tempus')
        }else if (data == 'mar'){
            $location.url('/marion')
        }
    }
    self.details = function(){
        $location.url('/secretgarden/details')
    }

    // dynamically setting src path not working!!
    // self.modalSrc = '/static/img/sg/sg_siteplan_01.jpg'

    self.open = function(data){
        if(data == 0){
            $modal.open({
                templateUrl: 'static/partials/sg_modal.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }else if(data == 1){
            $modal.open({
                templateUrl: 'static/partials/sg_modal1.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }else if(data == 2){
            $modal.open({
                templateUrl: 'static/partials/bg_modal_01.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }else if(data == 3){
            $modal.open({
                templateUrl: 'static/partials/bg_modal_02.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }else{
            $modal.open({
                templateUrl: 'static/partials/bg_modal_03.html',
                controller: 'HomeController',
                controllerAs: 'HC'
            })
        }
        
    }
    self.myInterval = 10000;
    self.sg_slides = [
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
    self.bg_slides = [
        {image: 'static/img/bg/bg_01.jpg'},
        {image: 'static/img/bg/bg_02.jpg'},
        {image: 'static/img/bg/bg_03.jpg'},
        {image: 'static/img/bg/bg_04.jpg'},
        {image: 'static/img/bg/bg_05.jpg'},
        {image: 'static/img/bg/bg_06.jpg'},
    ];
    self.mm_slides = [
        {image: 'static/img/mil/miller_01.jpg'},
        {image: 'static/img/mil/miller_02.jpg'},
        {image: 'static/img/mil/miller_03.jpg'},
        {image: 'static/img/mil/miller_04.jpg'},
        {image: 'static/img/mil/miller_05.jpg'},
        {image: 'static/img/mil/miller_06.jpg'},
    ];
    self.yes_slides = [
        {image: 'static/img/yes/yesler_01.jpg'},
        {image: 'static/img/yes/yesler_02.jpg'},
        {image: 'static/img/yes/yesler_03.jpg'},
        {image: 'static/img/yes/yesler_04.jpg'},
        {image: 'static/img/yes/yesler_05.jpg'},
        {image: 'static/img/yes/yesler_06.jpg'},
        {image: 'static/img/yes/yesler_07.jpg'},
        {image: 'static/img/yes/yesler_08.jpg'},
        {image: 'static/img/yes/yesler_09.jpg'},
    ];
    self.tem_slides = [
        {image: 'static/img/tem/tempus_01.jpg'},
        {image: 'static/img/tem/tempus_02.jpg'},
        {image: 'static/img/tem/tempus_03.jpg'},
        {image: 'static/img/tem/tempus_04.jpg'},
        {image: 'static/img/tem/tempus_05.jpg'},
        {image: 'static/img/tem/tempus_06.jpg'},
        {image: 'static/img/tem/tempus_07.jpg'},
        {image: 'static/img/tem/tempus_08.jpg'},
        {image: 'static/img/tem/tempus_09.jpg'},
        {image: 'static/img/tem/tempus_10.jpg'},
    ];
    self.mar_slides = [
        {image: 'static/img/mar/marion_01.jpg'},
        {image: 'static/img/mar/marion_02.jpg'},
        {image: 'static/img/mar/marion_03.jpg'},
        {image: 'static/img/mar/marion_04.jpg'},
        {image: 'static/img/mar/marion_05.jpg'},
    ];
})