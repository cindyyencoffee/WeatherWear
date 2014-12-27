
angular.module('myApp')
.factory("$d", myData);

function myData () {
  return {
    data: [

      /* enter a list of objects here */

        { name:''
          img: ''
          weather: ''},
        
        { name:''
          img: ''
          weather: ''},

        { name:''
          img: ''
          weather: ''},

    ]
  }
}