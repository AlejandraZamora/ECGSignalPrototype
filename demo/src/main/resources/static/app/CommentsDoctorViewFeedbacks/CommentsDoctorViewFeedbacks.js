'use strict';

angular.module('myApp.CommentsDoctorViewFeedbacks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentsDoctorViewFeedbacks', {
    templateUrl: 'CommentsDoctorViewFeedbacks/CommentsDoctorViewFeedbacks.html',
    controller: 'CommentsDoctorViewFeedbacksCtrl'
  });
}])

.controller('CommentsDoctorViewFeedbacksCtrl', ['$rootScope', '$scope', 'patient', function ($rootScope, $scope, patient) {
     $scope.foundCD=$rootScope.FindID;
     patient.get({patientId:""+$rootScope.patientId})
                .$promise.then(
                        //success
                        function( value ){
                            $scope.patientC=value;
                            $scope.comments=$scope.patientC.feedbacks;
                            if (typeof $scope.comments == "undefined"){
                                $scope.commentsY=false;
                                $scope.commentsTitle="No tiene ningun comentario";
                            }
                            if(typeof $scope.comments != "undefined"){
                                $scope.commentsY=true;
                            }
                        },
                        //error
                        function( error ){
                            console.log("Identificador no se encuentra registrado");
                        }
                );

}]);
