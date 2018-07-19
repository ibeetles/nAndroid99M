
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99',['ngMaterial','ngRoute'])
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                                .primaryPalette('teal');
            })
        .filter('featureName', function() {
            return function (items, letter) {
              var filtered = [];
              var letterMatch = new RegExp(letter, 'i');
              for (var i = 0; i < items.length; i++) {
                var item = items[i];
                //if (letterMatch.test(item.name.substring(0, 1))) {
                if (letterMatch.test(item.name)) {
                  filtered.push(item);
                }
              }
              return filtered;
            }
        })
        .filter('featureGroup', function(){
          return function (items, letter) {
            var filtered = [];
            var letterMatch = new RegExp(letter, 'i');
            for (var i = 0; i < items.length; i++) {
              var item = items[i];
              //if (letterMatch.test(item.group.substring(0, 1))) {
              if (letterMatch.test(item.group)) {
                filtered.push(item);
              }
            }
            return filtered;
        }
    });/*
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