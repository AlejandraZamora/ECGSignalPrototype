'use strict';

angular.module('myApp.Register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Register', {
    templateUrl: 'Register/Register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['patient', 'newPatient', '$rootScope', '$scope', 'patients','$http','$resource', '$location', function (patient, newPatient, $rootScope, $scope, patients, $http, $resource, $location) {
        $scope.id=null;
        $scope.name=null;
$scope.password=null;
$scope.role=null;
$scope.lastName=null;
$scope.street=null;
$scope.zip=null;
$scope.city=null;
$scope.lastGrade=null;
$scope.gradeDate=null;
$scope.gpa=null;
$scope.birthDate=null;
$scope.gender=null;
$scope.email=null;
$scope.age=null;
        $rootScope.nameP=null;
        $scope.save= function(){
            $rootScope.idPatient=$scope.id;
            $rootScope.patient={"id":$scope.id,"name":$scope.name
			, "password":$scope.password
			, "role":$scope.role
			, "lastName":$scope.lastName
			, "feedbacks":[]
			, "address":{
			//
			"street":$scope.street, 
			//3
			"zip":$scope.zip, 
			//2
			"city":$scope.city
			//1
			}
			, "academicInfo":{
			//
			"lastGrade":$scope.lastGrade, 
			//3
			"gradeDate":$scope.gradeDate, 
			//2
			"gpa":$scope.gpa
			//1
			}
			, "birthDate":$scope.birthDate
			, "gender":$scope.gender
			, "email":$scope.email
			, "age":$scope.age
			, "ecgSignal":[]
			};
			
			if($rootScope.patient.role=="Paciente"){
                $location.path("PatientAutorization");
            }else if($rootScope.patient.role=="Doctor"||$rootScope.patient.role=="Investigador"){
            newPatient.save($rootScope.patient,function(){
                console.info("Patient saved   "+ $rootScope.patient.name);
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
            };

        };
		$scope.selectmenu=document.getElementById("roleS");
        $scope.selectmenu.onchange=function(){
            $scope.role = this.options[this.selectedIndex].text;
        }
}]);
