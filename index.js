
angular.module('wearApp',[])

.controller('myCtrl', ['$scope','$window','$http', myCtrl]);

function myCtrl($scope,$window,$http) {
  
  //models
  angular.extend($scope, {
      weather: {
        result: [{items: [{date:'讀取中'}]}]
      }
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
        console.log(status);
      });
  
    }      
  });
  
 $scope.ezGet('http://www.corsproxy.com/twweatherapi.herokuapp.com/week2?location=all&output=json','weather');
  
    
}