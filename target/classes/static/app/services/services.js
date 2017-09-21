'use strict';

angular.module('services.factory', ['ngRoute', 'ngResource'])
.factory('patient', function($resource){
	return $resource('/patient/:patientId',{id:"@_patientId"},{get: { method: 'GET'}});
})
.factory('patients', function($resource) {
	return $resource('/patient',{},{ 'get': { method: 'GET', isArray: true}, 'update': { method: 'PUT', isArray: false}});
})
.factory('newPatient', function($resource) {
	return $resource('/patient/new');
})
;
