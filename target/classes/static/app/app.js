'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.CommentsDoctorViewFeedbacks',
  'myApp.CommentRegisterFeedbacks',
  'myApp.CommentsViewFeedbacks',
  'myApp.RegistersInvestigatorViewEcgSignal',
  'myApp.RegisterDoctorViewEcgSignal',
  'myApp.ControlRegisterEcgSignal',
  'myApp.ControlViewEcgSignal',
  'myApp.templateDoctor',
  'myApp.HomePatient',
  'myApp.UpdatePatient',
  'myApp.PatientProfile',
  'myApp.DoctorProfile',
  'myApp.InvestigatorProfile',
  'myApp.templateInvestigator',
  'myApp.templatePatient',
  'myApp.Login',
  'myApp.Register',
  'myApp.HomeInvestigator',
  'myApp.PatientAutorization',
  'myApp.HomeDoctor',
  'myApp.version',
  'services.factory',
  'chart.js',
  'ngWebworker'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/Login'});
}]);

