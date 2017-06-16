
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngMainAdminCtrl', function($scope) {

            $scope.pageTitle = 'Admin Page is loaded';
            $scope.init = function () {
              console.log('Init function is called - ngMainAdminCtrl');
            }

            angular.element(document).ready(function () {
                console.log('angular.element.ready - ngMainAdminCtrl');
            });
        });
})(window.angular);