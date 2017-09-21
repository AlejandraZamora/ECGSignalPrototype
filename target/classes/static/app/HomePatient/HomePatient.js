'use strict';

angular.module('myApp.HomePatient', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/HomePatient', {
    templateUrl: 'HomePatient/HomePatient.html',
    controller: 'HomePatientCtrl'
  });
}])

.controller('HomePatientCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient,$location) {

      patient.get({patientId:""+$rootScope.idPatient})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.patientH=value;
                        $scope.commentsHFeedbacks=$scope.patientH.feedbacks;
                        if (typeof $scope.commentsHFeedbacks == "undefined"){
                            $scope.recomendacionesHFeedbacks="No tienes ninguna recomendacion sobre Feedbacks";
                            $scope.cantHFeedbacks=undefined;
                        }
                        if(typeof $scope.commentsHFeedbacks != "undefined"){
                            $scope.recomendacionesHFeedbacks="Comentarios sobre Feedbacks de tu medico!!";
                            $scope.cantHFeedbacks=$scope.commentsHFeedbacks.length;
                        }

						$scope.diagnosticsHEcgSignal=$scope.patientH.ecgSignal;
                            $scope.valueEcgSignal=[];
                            $scope.frequencyEcgSignal=[];
						$scope.labelsEcgSignal=[];
						$scope.seriesEcgSignal = ['Datos de Control EcgSignal'];
						for(var n=0; n<$scope.diagnosticsHEcgSignal.length; n++){
							var dd=$scope.diagnosticsHEcgSignal[n];
	                            $scope.valueEcgSignal.push(dd.value);
	                            $scope.frequencyEcgSignal.push(dd.frequency);
							var datee=new Date(dd.date);
							var dia = datee.getDate();
							var mes = parseInt(datee.getMonth()) + 1;
							var year = datee.getFullYear();
							var dated=dia+"/"+mes+"/"+year;
							$scope.labelsEcgSignal.push(dated);
						}
                    },
                    //error
                    function( error ){
                        alert("El Identificador no se encuentra registrado");
                    }
            );
$scope.continueCSFeedbacks=function(){
	          	$location.path("CommentsViewFeedbacks");
	          	};
}]);
