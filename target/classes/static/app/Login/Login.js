'use strict';

angular.module('myApp.Login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Login', {
    templateUrl: 'Login/Login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$rootScope', '$scope', 'patient','patients','$http','$resource', '$location', function ($rootScope, $scope, patient, patients, $http, $resource, $location) {
        $scope.continueRegister=function(){
                $location.path("Register");
        }
        $rootScope.logout = function () {
          $http.post('/logout', {}).success(function () {
              $rootScope.authenticated = false;
              $location.path("/");
          }).error(function (data) {
              $rootScope.authenticated = false;
          });
        };
		var authenticate = function (credentials, callback) {
	        if(credentials){
	            $rootScope.idPatient=credentials.username;
	            $rootScope.pasPatient=credentials.password;
	        }
	         var headers = credentials ? {authorization: "Basic "
	                     + btoa("12dea96fec20593566ab75692c9949596833adc9" + ":" + "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8")
	         } : {};
	         $http.get('user', {headers: headers}).then(function (data) {
	             if (data.data.name) {
	                 $rootScope.authenticated = true;
	             } else {
	                 $rootScope.authenticated = false;
	             }
	             callback && callback();
	         }, function () {
	             $rootScope.authenticated = false;
	             callback && callback();
	         });
	
	     };
	     
	     authenticate();
	              $scope.credentials = {};
	              $scope.login = function () {
	                  authenticate($scope.credentials, function () {
	                      if ($rootScope.authenticated) {
	                         $scope.error = false;
	                         patient.get({patientId:""+$rootScope.idPatient})
	                         .$promise.then(
	                                 //success
	                                 function( value ){
	                                     $scope.patientH=value;
	                                     if(($scope.patientH.password==$rootScope.pasPatient)){
	                                         if($scope.patientH.role=="Paciente"){
	                                             $location.path("HomePatient");
	                                         }
	                                         if($scope.patientH.role=="Doctor"){
	                                             $location.path("HomeDoctor");
	                                         }
	                                         if($scope.patientH.role=="Investigador"){
	                                             $location.path("HomeInvestigator");
	                                         }
	                                     }else{
	                                         $rootScope.authenticated=false;
	                                         alert("El Identificador no se encuentra registrado");
	                                         $scope.error = true;
	                                         $rootScope.logout();
	                                     }
	                                 },
	                                 //error
	                                 function( error ){
	                                     $rootScope.authenticated=false;
	                                     alert("Autenticacion Fallida");
	                                     $scope.error = true;
	                                     $rootScope.logout();
	                                 }
	                         );
	                      } else {
	                          $scope.error = true;
	                          alert("Autenticación Fallida");
	                          $rootScope.logout();
	                      }
	                  });
	         };
        
}]);
