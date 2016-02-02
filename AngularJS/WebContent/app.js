angular.module('MyApp',[])

          .constant('VERSION','1.0')

          .run(['VERSION','$rootScope',function (VERSION,$rootScope){
        	  alert($rootScope);
        	  alert(VERSION);
          }]);