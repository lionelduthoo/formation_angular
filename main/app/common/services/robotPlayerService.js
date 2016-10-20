/**
 * Created by ldu on 20/10/2016.
 */

'use strict';


angular.module('robot.manager')
    .service('RobotPlayerService',['ApplicationService','$http',function (ApplicationService,$http) {

console.log('robot service');

        function _playHand(hand){

            var baseUrl = ApplicationService.load().API.URL + '/fingers?';
            console.log(baseUrl);
            $http(
                {
                    method: 'GET',
                    url: baseUrl,
                    params: hand
                })
                .then(function successCallback(response)
                {
                    console.log('RobotPlayerService _play successCallback : ');
                    console.log( response);
                }, function errorCallback(response)
                {
                    console.log('RobotPlayerService _play errorCallback : ' );
                    console.log( response);
                }
            );
        }

        return {
            playhand : _playHand, // si on met playhand() on aura le resultat alors que l'on veut que cela retourne la fonction

        }
    }]);


//http://10.1.20.117:8081/fingers
//http://10.1.20.117:8081/fingers?major=180