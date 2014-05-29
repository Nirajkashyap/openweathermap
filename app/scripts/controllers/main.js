'use strict';

angular.module('leftshifApp')
  .controller('MainCtrl', function ($scope,$http) {
    






		

$scope.findgo = function (){



console.log($("#cityid").val());

$scope.temparray = $("#cityid").val().split(",");
console.log($scope.temparray.length);

$scope.temparraymapvalue = [];

console.log($scope.temparray);

for(var i=0;i<$scope.temparray.length;i++)
{
		console.log('getting map for ' + $scope.temparray[i] );
		$http({url:"http://api.openweathermap.org/data/2.5/forecast/daily?q="+$scope.temparray[i]+"&cnt=14&APPID=xxxxx",
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










  });
