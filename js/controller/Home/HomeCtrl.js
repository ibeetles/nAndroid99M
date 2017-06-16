
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngHomeCtrl', function($scope) {

            $scope.pageTitle = 'Home Page is loaded';
            $scope.init = function () {
              console.log('Init function is called - ngHomeCtrl');
            }

            angular.element(document).ready(function () {
                console.log('angular.element.ready - ngHomeCtrl');
            });
        });
})(window.angular);