'use strict';

angular.module('myApp.HomeDoctor', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeDoctor', {
    templateUrl: 'HomeDoctor/HomeDoctor.html',
    controller: 'HomeDoctorCtrl'
  });
}])

.controller('HomeDoctorCtrl', ['$rootScope', '$scope', 'patient','$location', function ($rootScope, $scope, patient,$location) {
	patient.get({patientId:""+$rootScope.idPatient})
    .$promise.then(
            //success
            function( value ){
                $scope.patientH=value;
            },
            //error
            function( error ){
                alert("El Identificador no se encuentra registrado");
            }
    );
    $rootScope.FindID=false;
    $rootScope.patientId=null;
    $scope.found=false;
    $scope.pId=null;
    $rootScope.patientId=$scope.pId;
    $scope.consultar=function(){
        $rootScope.patientId=$scope.pId;
        patient.get({patientId:""+$rootScope.patientId})
        .$promise.then(
                //success
                function( value ){
                    $rootScope.FindID=true;
                    $scope.principal=value;
                },
                //error
                function( error ){
                    alert("Identificador no se encuentra registrado");
                }
        );

    };
    $scope.NuevaConsulta=function(){
        $rootScope.FindID=false;
    };

}]);
