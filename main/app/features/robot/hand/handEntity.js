/**
 * Created by ldu on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')
    .factory('Hand',[function(){
        function Hand(){
            this.thumb = 90;
            this.ringfinger = 90;
            this.auricular = 90;
            this.index = 90;
            this.major = 180;
            return this;
        }
        /* 2 solutions pour instancier hand une fonction build ou un retour avec new Hand()
         Hand.build=function () {
         return new Hand();
         }*/
        return function () {
            return new Hand();
        };
    }]);

