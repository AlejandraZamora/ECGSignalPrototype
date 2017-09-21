'use strict';

angular.module('myApp.PatientProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientProfile', {
    templateUrl: 'PatientProfile/PatientProfile.html',
    controller: 'PatientProfileCtrl'
  });
}])

.controller('PatientProfileCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient,$location) {

    patient.get({patientId:""+$rootScope.idPatient})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.patient=value;
                        },
                        //error
                        function( error ){
                            alert("El paciente no se encuentra registrado");
                        }
                );
    $scope.continueUP=function(){
        $location.path("UpdatePatient");
    };

}]);
