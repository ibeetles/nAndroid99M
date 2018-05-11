
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngMainFeatAdoptCtrl', function($scope,$location) {

          $scope.buganizerdate = '';

            $scope.init = function () {
            }

            $scope.currentPage = 'nFeatureAdoption';

            // Define the titles of your tabs
            $scope.tabs = ["N", "O", "P"];

            // Change the tab
            $scope.switchTab = function(index) {
                switch(index) {
                    case 0:
                        $scope.currentPage = 'nFeatureAdoption';
                        break;
                    case 1:
                        $scope.currentPage = 'oFeatureAdoption';
                        break;
                    case 2:
                        $scope.currentPage = 'pFeatureAdoption';
                        break;
                }
            }

            angular.element(document).ready(function () {
              console.log("ngMainFeatAdoptCtrl ready() is called");

              var yesterday = new Date(Date.now() - 86400000);
              var dd = yesterday.getDate();
              var mm = yesterday.getMonth() + 1;
              var yyyy = yesterday.getFullYear();

              $scope.buganizerdate = mm+'/'+dd+'/'+yyyy+'.';

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