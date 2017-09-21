'use strict';

angular.module('myApp.ControlViewEcgSignal', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ControlViewEcgSignal', {
    templateUrl: 'ControlViewEcgSignal/ControlViewEcgSignal.html',
    controller: 'ControlViewEcgSignalCtrl'
  });
}])

.controller('ControlViewEcgSignalCtrl', ['$rootScope', '$scope', 'patient', 'Webworker', '$location', function ($rootScope, $scope, patient, Webworker, $location) {
     
    $scope.$on('$locationChangeSuccess', function( event ) {
        disconnect();
        dps.length=0;
        inSignalPage=false;
    });
     
     
    var dps = []; // dataPoints
    var inSignalPage = true;
    var chart = new CanvasJS.Chart("chartContainer",{
        title :{
            text: "ECG Signal"
        },
        data: [{
            type: "line",
            dataPoints: dps
        }]
    });
   
    var yVal = 990;
    var xVal=0;
    var updateInterval = 0.004;
    var dataLength = 500; // number of dataPoints visible at any point
    
    setInterval(function(){updateChart()}, updateInterval);
    
    var stompClient = null;
    function setConnected(connected) {
        $("#connect").prop("disabled", connected);
        $("#disconnect").prop("disabled", !connected);
        if (connected) {
            $("#conversation").show();
        }
        else {
            $("#conversation").hide();
        }
        $("#greetings").html("");
    }

    function connect() {
        var socket = new SockJS('/ecg-websocket');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            setConnected(true);
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/ECGsignal', function (greeting) {
                yVal=parseInt(JSON.parse(greeting.body).value);
            });
        });
    }


    function disconnect() {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    }

    
    function updateChart() {
        chart.render();
    }

    $(function () {
        $("form").on('submit', function (e) {
            e.preventDefault();
        });
        $( "#connect" ).click(function() { connect(); });
        $( "#disconnect" ).click(function() { disconnect(); });
        $( "#send" ).click(function() { sendName(); });
    });
    
    patient.get({patientId:""+$rootScope.idPatient})
    .$promise.then(
            //success
            function( value ){
                $scope.patient=value;
                for(var l=0;l<dataLength; l++){
                    dps.push({x: xVal, y: yVal});
                }
                /**
                var stop=0;
                if(stop!=4000){
                    count = count||1;
                    for (var j = 0; j < count; j++) {
                        stop++;
                        yVal = parseInt($rootScope.dataNew[stop]);
                        dps.push({
                            x: xVal,
                            y: yVal
                        });
                        xVal=xVal+0.25;
                    };
                    if (dps.length > dataLength)
                    {
                        dps.shift();
                    }
                    chart.render();
                }
                */
                var worker = new Worker('ControlViewEcgSignal/WebSocketWorker.js');
                worker.onmessage = function (event) {
                    stompClient.send("/app/beginECG");
                    xVal=xVal+updateInterval;
                    dps.push({x: xVal, y: yVal});
                    if (dps.length > dataLength)
                    {
                        dps.shift();
                    }
                    if(inSignalPage){
                        worker.postMessage("Again");
                    }
                };
            },
            //error
            function( error ){
                alert("Error");
            }
    );
    
    connect();
}]);