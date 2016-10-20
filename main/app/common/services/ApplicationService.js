/**
 * Created by ldu on 19/10/2016.
 */
'use strict',

angular.module('robot.manager')
.service('ApplicationService',
        ['ITLocalStorage','Application',
  function (ITLocalStorage,Application) {

    function _load(){
        var application = ITLocalStorage.load();
        console.log(application)
        return application? application : new Application();
    }

    // ajout fonction publique vers load
    // et redirection save vers itlocalstorage.save
    return{
        load : _load,
        save : ITLocalStorage.save
    }

}]);