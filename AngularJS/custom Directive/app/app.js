let myapp = angular.module('myapp',['ngRoute']);

myapp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
            templateUrl: 'views/home.html',
            controller:'myappcontroller'
        })
        .when('/directory',{
            templateUrl:'views/directory.html',
            controller:'myappcontroller'
        })
        .otherwise({
            redirectTo: '/home'
        })
}])

myapp.directive('randomMovie',[function(){

    return {
        restrict: 'E',
        scope:{
            movies:'=',
            title:'='
        },
        templateUrl:'views/random.html',
        controller: function($scope){
            $scope.random = Math.floor(Math.random()*2);
        }
    
    }
}])




myapp.controller('myappcontroller',['$scope','$http',function($scope,$http){

    $scope.removedata = function(movie){
        let removedata = $scope.movies.indexOf(movie);
        $scope.movies.splice(removedata,1);
    }

    $scope.addMovie = function(){
        $scope.movies.push({
            name:$scope.movie.name,
            rating:$scope.movie.rating,
            ticket_price:$scope.movie.price,
            available:true

            
        });
        $scope.movie.name="";
        $scope.movie.rating="";
        $scope.movie.price="";
        

    };
    $http.get('data/movie.json')
     .then(function(response){
        $scope.movies = response.data;
     })

    

   
}]);