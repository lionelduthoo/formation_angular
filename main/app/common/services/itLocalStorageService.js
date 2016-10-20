/**
 * Created by ldu on 19/10/2016.
 */
'use strict',
angular.module('localStorage.services',[])

angular.module('localStorage.services')
    .provider('ITLocalStorage',function(){

            var self = this;
            self.defaultKey= 'IT_KEY';

            this.$get=function(){

                function _save(obj){
                    // localstorage fonction native du navigateur
                    if(obj)
                        localStorage.setItem(self.defaultKey,angular.toJson(obj) )
                }
                function _load(){
                    var obj = localStorage.getItem(self.defaultKey);
                    if(obj){
                        return  angular.fromJson(obj);
                    }
                    return obj;

                }
                return{
                    save : _save,
                    load : _load
                };
            }
        }
    )