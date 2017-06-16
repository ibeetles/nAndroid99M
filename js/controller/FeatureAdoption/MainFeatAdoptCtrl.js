
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngMainFeatAdoptCtrl', function($scope,$location) {

            $scope.init = function () {
            }

            $scope.currentPage = 'nFeatureAdoption';

            // Define the titles of your tabs
            $scope.tabs = ["N & N MR1", "O"];

            // Change the tab
            $scope.switchTab = function(index) {
                switch(index) {
                    case 0:
                        $scope.currentPage = 'nFeatureAdoption';
                        break;
                    case 1:
                        $scope.currentPage = 'oFeatureAdoption';
                        break;
                }
            }

            angular.element(document).ready(function () {
            });
        })/*
        .config(function ($routeProvider) {
            $routeProvider
                .when( '/NMR1', {
                    templateUrl: 'view/FeatureAdoption/N.html',
                    controller: 'ngNfeatureCtrl'
                })
                .when( '/O', {
                    templateUrl: 'view/FeatureAdoption/O.html',
                    controller: 'ngOfeatureCtrl'
                });
        })*/;
})(window.angular);