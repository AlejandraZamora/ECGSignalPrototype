'use strict';

angular.module('myApp.RegistersInvestigatorViewEcgSignal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/RegistersInvestigatorViewEcgSignal', {
    templateUrl: 'RegistersInvestigatorViewEcgSignal/RegistersInvestigatorViewEcgSignal.html',
    controller: 'RegistersInvestigatorViewEcgSignalCtrl'
  });
}])

.controller('RegistersInvestigatorViewEcgSignalCtrl', ['patient', 'patients', '$rootScope', '$scope', function (patient, patients, $rootScope, $scope) {
     patients.get()
        .$promise.then(
                //success
                function( value ){
                    $scope.patientsList=value;
$scope.value=[];
//1
$scope.frequency=[];
//2
                    $scope.labels=[];
                    $scope.diagnostics=[];
                    $scope.series = ['Datos de Control del estudio EcgSignal'];
                    $scope.principalAndDiagnostic=[];
                    for (var i = 0; i < $scope.patientsList.length; i++) {
                        if($scope.patientsList[i].ecgSignal.length >= 1){
                            $scope.patientAct=$scope.patientsList[i];
                            $scope.labels.push($scope.patientAct.id);
var valueInitial=0;
var frequencyInitial=0;
                            for(var n=0; n<$scope.patientAct.ecgSignal.length; n++){
                                var dd=$scope.patientAct.ecgSignal[n];
valueInitial=valueInitial+dd.value;
frequencyInitial=frequencyInitial+dd.frequency;
$scope.principalAndDiagnostic.push([$scope.patientAct.id, $scope.patientAct.name
, dd.value
, dd.frequency
, dd.date
]);
                            }
$scope.value.push(valueInitial/$scope.patientAct.ecgSignal.length);
$scope.frequency.push(frequencyInitial/$scope.patientAct.ecgSignal.length);
                            
                            $scope.diagnostics.push($scope.patientsList[i].ecgSignal[0]);
                        }
                    }
value
valueInitial=0;
frequency
frequencyInitial=0;
                    for(var j = 0; j < $scope.frequency.length; j++) {
valueInitial=valueInitial+$scope.value[j];
frequencyInitial=frequencyInitial+$scope.frequency[j];
                    }
                    $scope.todoData=[];
$scope.todoData.push(valueInitial/$scope.value.length);
$scope.todoData.push(frequencyInitial/$scope.frequency.length);
					$scope.todoLabels=[
'Value'
,
//1
'Frequency'
//0
                    ];
                },
                //error
                function( error ){
                    alert("El paciente no se encuentra registrado");
                }
        );
}]);
