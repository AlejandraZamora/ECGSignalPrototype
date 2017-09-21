'use strict';

angular.module('myApp.CommentsViewFeedbacks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsViewFeedbacks', {
    templateUrl: 'CommentsViewFeedbacks/CommentsViewFeedbacks.html',
    controller: 'CommentsViewFeedbacksCtrl'
  });
}])

.controller('CommentsViewFeedbacksCtrl', ['$rootScope', '$scope', 'patient', function ($rootScope, $scope, patient) {

     patient.get({patientId:""+$rootScope.idPatient})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.patientC=value;
                            $scope.comments=$scope.patientC.feedbacks;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.commentsTitle="No tienes ningun comentario";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            alert("Identificador no se encuentra registrado");
                        }
                );

}]);
