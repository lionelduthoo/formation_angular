'use strict',

angular.module('robot.manager', [
    // injection des modules a utiliser (chaque module contient des service ou autres...)
    // il faut ajouter
    'itesoft',
    'ui.hand',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap.dropdown',
    'localStorage.services'
    ])
    //.config(['$translateProvider', '$translatePartialLoaderProvider',
    .config(['$translateProvider',
     //       function ($translateProvider, $translatePartialLoaderProvider)
            function ($translateProvider)
            {
        // Declare languages mapping
        $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'de'], {
            'en_US': 'en',
            'en_GB': 'en',
            'fr_FR': 'fr',
            'fr-CA': 'fr',
            'de-DE': 'de'
        }).determinePreferredLanguage();

        // Use partial loader
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'assets/locale/{lang}/{part}-{lang}.json'
        });

        $translateProvider.useSanitizeValueStrategy();
    }])

    //.config(['ITLocalStorageProvider','$rootScopeProvider',
    .config(['ITLocalStorageProvider',
     //   function(ITLocalStorageProvider,$rootScopeProvider){
        function(ITLocalStorageProvider){
            // configurer les composants configurables URL cle API fichier JSON de conf...
            // avant l'pplic bootstrap
            // a l'instanciation du projet
            // rootscope est un service
            // pourquoi pour rendre la cle personalisable
            console.log('configuration define defaul key pour local storage');
            ITLocalStorageProvider.defaultKey = 'ROBOT_MANAGER';
        }])

    .run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            $rootScope.pageTitle = $route.current.title;
        });
    }]);
