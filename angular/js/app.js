
var app = angular.module('demo',  ['ngRoute']);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[{');
    $interpolateProvider.endSymbol('}]}');
});

app.config(['$locationProvider', function($location)
{
    $location.hashPrefix('!');
}
]);


app.config(['$routeProvider',

    function ($routeProvider)
    {
				
        $routeProvider.
            when('/', 
										{ 
								
										templateUrl: function (params) { 
																		
																		    
																		return 'angular/viewtemplate/index.html'; 
																		
																		 
																		
																		}
										


										}


				)
			
            .when('/page/forecast',
										{
											
											templateUrl: function (params) {  
											
											
											
											return 'angular/viewtemplate/main.html';
												
												}
											
											
											
											
											
											

										}

				)
			.otherwise({ templateUrl: 'angular/viewtemplate/404.html'  });	
        
    }
]);
	

app.controller('mainCtrl', ['$scope','$http', function ($scope,$http)
{




$scope.go1 = function (){

console.log('hell');

console.log($("#cityid").val());

temparray = $("#cityid").val().split(",");
console.log(temparray.length);

$scope.temparraymapvalue = [];

for(i=0;i<temparray.length;i++)
{
		console.log('getting map for ' + temparray[i] );
		 $http({url:"http://api.openweathermap.org/data/2.5/forecast/daily?q="+temparray[i]+"&cnt=14&APPID=xxxxx",
                method:"GET"
                            })

                .success(function(data){
					console.log(data);
					
					$scope.temparraymapvalue.push(data);
					
					
					/*if(data['cod'] == 200)
					{
					$scope.temparraymapvalue.push(data);
					console.log('only valid data ')
						
					}*/
                    
                })
                 .error(function(data, status, headers, config) {

                    console.log('HTTP ERRORS.........................');
                    console.log(data);

                });



}

}
    




}]);
