
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngMainCtrl', function($scope, $mdSidenav,RESOURCE) {

            $scope.currentPage = 'featureAdoption';


            $scope.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

            angular.element(document).ready(function () {
                console.log('angular.element.ready - ngMainCtrl');

                switch($scope.currentPage) {
                    case 'home':
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Home (Next99)';
                        break;
                    case 'featureAdoption':
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android Feature Adoption Status';

                        break;
                    case 'androidOne':
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android One Feature Adoption Status';
                        break;
                    case 'ecoSystemReview':
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android Ecosystem Review';
                        break;
                    case 'admin':
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Admin';
                        break;
                }
                $scope.$apply();
            });


            $scope.pageNavigate = function(index) {
                switch(index) {
                    case 0:
                        $scope.currentPage = 'home';
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Home';
                        break;
                    case 1:
                        $scope.currentPage = 'featureAdoption';
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android Feature Adoption Status';
                        break;
                    case 2:
                        $scope.currentPage = 'androidOne';
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android One Feature Adoption Status';
                        break;
                    case 3:
                        $scope.currentPage = 'ecoSystemReview';
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Android Ecosystem Review';
                        break;
                    case 4:
                        $scope.currentPage = 'admin';
                        $scope.appTitle = RESOURCE.APP_TITLE + 'Admin';
                        break;
                }
            }

            angular.element(document).ready(function () {

            });
        })/*
        .config(function ($routeProvider) {
            $routeProvider
            .when( '/adoption', {
                templateUrl: 'view/FeatureAdoption/index_feat_adopt.html',
                controller: 'ngMainFeatAdoptCtrl'
            })
            .when( '/progress', {
                templateUrl: 'view/ManFeatureAdoption/index_mandatory_feat_adopt.html',
                controller: 'ngMainManFeatAdoptCtrl'
            })
            .when( '/admin', {
                templateUrl: 'view/Admin/Admin.html',
                controller: 'ngMainAdminCtrl'
            });
        })*/;
})(window.angular);