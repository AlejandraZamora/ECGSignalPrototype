'use strict';

angular.module('myApp.templatePatient', ['ngRoute'])

.controller('templatePatientCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient, $location) {

      $scope.continuePerfil=function(){
            $location.path("PatientProfile");
      };
      $scope.continueLogout=function(){
            $rootScope.logout();
      };
      $scope.continueHome=function(){
            $location.path("HomePatient");
      };
      
      $scope.continueCommentsFeedbacks=function(){
      	$location.path("CommentsViewFeedbacks");
      };
      $scope.continueCRegisterEcgSignal=function(){
            $location.path("ControlRegisterEcgSignal");
      };
      $scope.continueCViewEcgSignal=function(){
            $location.path("ControlViewEcgSignal");
      };
}]);
