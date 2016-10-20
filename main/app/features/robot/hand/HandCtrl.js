/**
 * Created by ldu on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')
        .controller('HandCtrl',
            ['ApplicationService','Step','RobotPlayerService','$scope','$timeout',
    function(ApplicationService,Step,RobotPlayerService,$scope,$timeout){

        $scope.applicationservice =ApplicationService;
        $scope.application = $scope.applicationservice.load();

        $scope.newStep = new Step();
        console.log($scope.newStep);
        $scope.playlist = [];

        RobotPlayerService.playhand($scope.newStep.hand);

        $scope.createStep = function(){
            // build hhtt request
            $scope.playlist.push($scope.newStep);
            $scope.application.playlist = $scope.playlist;
            $scope.newStep = new Step($scope.newStep);
        };

        $scope.submitplaylist = function(){
            console.log('SUBMIT PLAYLIST');
            angular.forEach($scope.playlist,function(hand){
                $timeout(function () {
                    console.log('send hand');
                    console.log(hand);
                    RobotPlayerService.playhand(hand);
                }, 5000);
            });
        };

        $scope.sendToHand = function(){
            // build hhtt request
            //var httprequest = 'http://' +$scope.application.API.URL + '/ +fingers?=' +$scope.newhand.major;
            RobotPlayerService.playhand($scope.newStep.hand);
        };
    }

    ]);

//http://10.1.20.117:8081/fingers
//http://10.1.20.117:8081/fingers?major=180

