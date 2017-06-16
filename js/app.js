
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99',['ngMaterial','ngRoute'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                                .primaryPalette('teal');
            }

        );/*
        .config(function($mdThemingProvider) {

            var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
                'contrastDefaultColor': 'light',
                'contrastDarkColors': ['50'],
                '50': 'ffffff'
            });

            $mdThemingProvider.definePalette('customBlue', customBlueMap);

            $mdThemingProvider.theme('default')
                .primaryPalette('customBlue', {
                    'default': '500',
                    'hue-1': '50'
                })
                .accentPalette('pink');

            $mdThemingProvider.theme('input', 'default')
                .primaryPalette('grey');
        }
    );*/
})(window.angular);

//red, pink, purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orange, brown, grey, blue-grey