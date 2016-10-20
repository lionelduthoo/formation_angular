/**
 * Created by ldu on 19/10/2016.
 */
'use strict',

angular.module('robot.manager')
    .factory('Application',[function () {

    function Application(){
        this.API = {
            URL : 'url de base'
        };
        this.playlist = [];
    }

    return function () {
        return new Application();
    }

}]);
