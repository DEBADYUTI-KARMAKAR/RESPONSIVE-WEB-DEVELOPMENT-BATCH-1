let myapp = angular.module('myapp',[]);

myapp.controller('myappcontroller',['$scope',function($scope){

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
        

    }

    $scope.movies=[
        
        {
            name:"KGF2",
            rating:8.5,
            ticket_price:180,
            available: true
        },
        {
            name:"DDLJ",
            rating:8,
            ticket_price:150,
            available: false
        },
        {
            name:"Captain",
            rating:7,
            ticket_price:200,
            available: true
        }
    ]
}]);