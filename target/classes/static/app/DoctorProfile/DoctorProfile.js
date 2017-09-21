'use strict';

angular.module('myApp.DoctorProfile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/DoctorProfile', {
    templateUrl: 'DoctorProfile/DoctorProfile.html',
    controller: 'DoctorProfileCtrl'
  });
}])

.controller('DoctorProfileCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient,$location) {

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
