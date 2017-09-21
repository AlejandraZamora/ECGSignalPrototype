'use strict';

angular.module('myApp.UpdatePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/UpdatePatient', {
    templateUrl: 'UpdatePatient/UpdatePatient.html',
    controller: 'UpdatePatientCtrl'
  });
}])

.controller('UpdatePatientCtrl', ['$rootScope', '$scope','patient', 'patients','$http','$resource', '$location', function ($rootScope, $scope, patient, patients, $http, $resource, $location) {
		$scope.back=function(){
		    patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientA=value;
                        if($scope.patientA.role==("Paciente")){
                            $location.path("HomePatient");
                        }else if($scope.patientA.role==("Doctor")){
                            $location.path("HomeDoctor");
                        }else if($scope.patientA.role==("Investigador")){
                            $location.path("HomeInvestigator");
                        }
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
		};
		$scope.name=null;
		$scope.lastName=null;
$scope.academicInfoLastGrade=null;
$scope.academicInfoGradeDate=null;
$scope.academicInfoGpa=null;
        $rootScope.nameP=null;

        $scope.update= function(){
            patient.get({patientId:""+$rootScope.idPatient})
                    .$promise.then(
                            //success
                            function( value ){
                                $scope.patientT=value;
if($scope.name!=null&&$scope.name!=''){
	$scope.patientT.name=$scope.name;
}
if($scope.lastName!=null&&$scope.lastName!=''){
	$scope.patientT.lastName=$scope.lastName;
}
if($scope.academicInfoLastGrade!=null){
    $scope.patientT.academicInfo.lastGrade=$scope.academicInfoLastGrade;
}
if($scope.academicInfoGradeDate!=null){
    $scope.patientT.academicInfo.gradeDate=$scope.academicInfoGradeDate;
}
if($scope.academicInfoGpa!=null){
    $scope.patientT.academicInfo.gpa=$scope.academicInfoGpa;
}
                                patients.update($scope.patientT)
                                .$promise.then(
                                    //success
                                    function(value){
                                        console.log("Registro Exitoso");
                                        alert("Registro Exitoso");
            							if($scope.patientT.role==("Paciente")){
                                            $location.path("HomePatient");
                                        }else if($scope.patientT.role==("Doctor")){
                                            $location.path("HomeDoctor");
                                        }else if($scope.patientT.role==("Investigador")){
                                            $location.path("HomeInvestigator");
                                        }
                                    },
                                    //error
                                    function( error ){
                                        console.log("El paciente no se pudo actualizar");
                                        alert("No se puedo registrar");
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
