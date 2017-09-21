'use strict';

angular.module('myApp.CommentRegisterFeedbacks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/CommentRegisterFeedbacks', {
    templateUrl: 'CommentRegisterFeedbacks/CommentRegisterFeedbacks.html',
    controller: 'CommentRegisterFeedbacksCtrl'
  });
}])

.controller('CommentRegisterFeedbacksCtrl', ['$rootScope', '$scope', 'patient','patients','$http','$resource', '$location', function ($rootScope, $scope, patient, patients, $http, $resource, $location) {
        $scope.title=null;
$scope.description=null;
        $scope.date=new Date();
        $scope.pId=$rootScope.patientId;
        $scope.foundC=$rootScope.FindID;
        $scope.saveComment= function(){
            $scope.comment={"date":$scope.date
            ,"description":$scope.description
             ,"title":$scope.title};
            patient.get({patientId:""+$scope.pId})
            .$promise.then(
                    //success
                    function( value ){
                        $scope.principal=value;
                        $scope.principal.feedbacks.push($scope.comment);
                        patients.update($scope.principal)
                        .$promise.then(
                            //success
                            function(value){
                                $location.path("CommentsDoctorViewFeedbacks");
                            },
                            //error
                            function( error ){
                                console.log("No se pudo actualizar");
                            }

                        );
                    },
                    //error
                    function( error ){
                        alert("Identificador no se encuentra registrado");
                    }
            );
        };
}]);
