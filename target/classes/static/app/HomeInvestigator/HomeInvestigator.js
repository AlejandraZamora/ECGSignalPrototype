'use strict';

angular.module('myApp.HomeInvestigator', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomeInvestigator', {
    templateUrl: 'HomeInvestigator/HomeInvestigator.html',
    controller: 'HomeInvestigatorCtrl'
  });
}])

.controller('HomeInvestigatorCtrl', ['patient', '$rootScope', '$scope', function (patient, $rootScope, $scope) {
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
}]);
