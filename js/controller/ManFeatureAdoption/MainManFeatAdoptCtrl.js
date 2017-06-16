
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngMainManFeatAdoptCtrl', function($scope) {

            $scope.pageTitle = 'Mandatory Feature Adoption Progress Page is loaded';

            $scope.init = function () {
                console.log('Init function is called - ngMainManFeatAdoptCtrl');
            }

            angular.element(document).ready(function () {
                console.log('angular.element.ready - ngMainManFeatAdoptCtrl');
            });
        });
})(window.angular);