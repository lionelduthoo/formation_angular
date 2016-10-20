/**
 * Created by ldu on 20/10/2016.
 */

'use strict';


angular.module('robot.manager')
    .service('RobotPlayerService',['ApplicationService','$http',function (ApplicationService,$http) {

console.log('robot service');

        function _playHand(hand){

            var baseUrl = ApplicationService.load().API.URL + '/fingers?';
            console.log('ROBOT SERVICE');
            console.log(hand);
            return $http(
                {
                    method: 'GET',
                    url: baseUrl,
                    params: hand
                });

        }

        return {
            playhand : _playHand // si on met playhand() on aura le resultat alors que l'on veut que cela retourne la fonction

        }
    }]);


//http://10.1.20.117:8081/fingers
//http://10.1.20.117:8081/fingers?major=180