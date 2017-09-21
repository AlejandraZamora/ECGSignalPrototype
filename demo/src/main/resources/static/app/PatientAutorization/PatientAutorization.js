'use strict';

angular.module('myApp.PatientAutorization', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/PatientAutorization', {
    templateUrl: 'PatientAutorization/PatientAutorization.html',
    controller: 'PatientAutorizationCtrl'
  });
}])

.controller('PatientAutorizationCtrl', ['patient', '$rootScope', 'newPatient', '$scope', '$http', '$location', function(patient, $rootScope, newPatient, $scope, $http, $location) {
    $scope.continueRegister=function(){
        newPatient.save($rootScope.patient, function(){
        $rootScope.idPatient=$rootScope.patient.id;
        $rootScope.authenticated = true;
        patient.get({patientId:""+$rootScope.idPatient})
        .$promise.then(
                //success
                function( value ){
                    alert("Registro Completado de "+ $rootScope.patient.name);
                    $location.path("Login");
                },
                //error
                function( error ){
                    alert("El Identificador no se encuentra registrado");
                }
        );
    });
    }

}]);
