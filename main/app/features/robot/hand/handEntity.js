/**
 * Created by ldu on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')
    .factory('Hand',[function(){
        function Hand(){
            this.thumb = 0;
            this.ringfinger = 0;
            this.auricular = 0;
            this.index = 0;
            this.major = 0;
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

