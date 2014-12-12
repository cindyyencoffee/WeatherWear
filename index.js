angular.module('myApp',[])

.controller('myCtrl', ['$scope','$window','$http', myCtrl]);

function myCtrl($scope,$window,$http) {
  
  //models
  angular.extend($scope, {
      weather : 'Hello, World!'
    }  
  );  
 
  //methods
  
  angular.extend($scope, {    
    ezGet : function(url, t){
      $http.get(url)
        .success(function(data,   status, headers, config) {
        console.log(data);
        $scope[t] = data;
  })
      
      .error(function(data, status, headers, config) {
        $scope.log(status);
  });
  
    }      
  });
  
 $scope.ezGet('http://www.corsproxy.com/twweatherapi.herokuapp.com/week2?location=all&output=json','weather');
  
    
}