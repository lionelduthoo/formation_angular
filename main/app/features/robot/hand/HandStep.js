/**
 * Created by ldu on 20/10/2016.
 */
'use strict';

angular.module('robot.manager')
    .factory('Step',['Hand',function(Hand){
        function Step(prevstep){
            this.stepIndex = prevstep? prevstep.stepIndex+1:1;
            // copie de l'attribut (sans le hask kay)
            this.hand = prevstep? angular.copy(prevstep.hand, this.hand) : new Hand();
            return this;
        }
        return function (prevstep) {
            return new Step(prevstep);
        };
    }]);