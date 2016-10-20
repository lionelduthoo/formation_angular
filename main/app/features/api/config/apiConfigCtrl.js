/**
 * Created by ldu on 19/10/2016.
 */
'use strict';

angular.module('robot.manager')
    .controller('ApiConfigCtrl',['$scope','ApplicationService',function ($scope,ApplicationService) {
        // le scope permet de communiquer les variables avec la vue
        // les fonctions du provider ApplicationService sont passees dans applicationservice
        $scope.applicationservice =ApplicationService;
        $scope.application = $scope.applicationservice.load();
        console.log('test controleur apiconf' +$scope.application);

    }]);




