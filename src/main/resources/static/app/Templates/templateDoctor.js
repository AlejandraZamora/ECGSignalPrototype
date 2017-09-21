'use strict';

angular.module('myApp.templateDoctor', ['ngRoute'])

.controller('templateDoctorCtrl', ['$rootScope', '$scope', 'patient', '$location', function ($rootScope, $scope, patient, $location) {
		
		$scope.continuePerfil=function(){
              $location.path("DoctorProfile");
         };
		
      $scope.continueLogoutD=function(){
            $rootScope.logout();
      };
      $scope.continueHomeD=function(){
            $location.path("HomeDoctor");
      };
      $scope.continueRegistersPEcgSignal=function(){
      		$location.path("RegisterDoctorViewEcgSignal");
      };
$scope.continueCommentRegisterFeedbacks=function(){
        $location.path("CommentRegisterFeedbacks");
  };
  $scope.continueCommentViewFeedbacks=function(){
        $location.path("CommentsDoctorViewFeedbacks");
  };
}]);
