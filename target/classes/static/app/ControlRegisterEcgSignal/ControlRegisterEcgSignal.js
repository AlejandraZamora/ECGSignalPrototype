'use strict';

angular.module('myApp.ControlRegisterEcgSignal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlRegisterEcgSignal', {
    templateUrl: 'ControlRegisterEcgSignal/ControlRegisterEcgSignal.html',
    controller: 'ControlRegisterEcgSignalCtrl'
  });
}])

.controller('ControlRegisterEcgSignalCtrl', ['$rootScope', '$scope', 'patients','patient','$http','$resource', '$location', function ($rootScope, $scope, patients,patient, $http, $resource, $location) {
		$scope.date=null;
		$scope.value=null;
		$scope.frequency=null;
		
		
		
		
		
		

        $scope.saveRegister= function(){
            $scope.diagnostic={"date":$scope.date
, "value":$scope.value
, "frequency":$scope.frequency
            };
            patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientT=value;
                        $scope.patientT.ecgSignal.push($scope.diagnostic);
                        patients.update($scope.patientT)
                        .$promise.then(
                            //success
                            function(value){
                                console.log("Patient update"+ $scope.patientT.ecgSignal);
                                $location.path("HomePatient");
                            },
                            //error
                            function( error ){
                                console.log("El patient no se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
        };
}]);
