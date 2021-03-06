
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
    .controller('ngNfeatureDremelCtrl', function($scope,dremelF) {

        $scope.jsonFeatureAdoptionList = [];

        $scope.oemList = [];
        $scope.deviceList = [];
        $scope.featureList = [];
        $scope.featureList.features = [];

        $scope.buganizerdate = '';


        $scope.init = function () {
            var yesterday = new Date(Date.now() - 86400000);
            var dd = yesterday.getDate();
            var mm = yesterday.getMonth() + 1;
            var yyyy = yesterday.getFullYear();

            $scope.buganizerdate = mm+'/'+dd+'/'+yyyy+'.';
        }

        angular.element(document).ready(function () {
            dremelF.executeSQL('NFeature').then(
                // success function
                function(jsonData) {
                    $scope.jsonFeatureAdoptionList = jsonData;

                    if(_validateJsonData($scope.jsonFeatureAdoptionList) === false) {
                        console.log("Succeeded in executing SQL. No data exisiting - dremelF.executeSQL ");
                    } else {
                        console.log("Succeeded in retrieving data out of Dremel - dremelF.executeSQL");
                        _parseData();
                    }
                },
                // error function
                function(e) {
                    _onDataError(e);  // Failed to retrieve Market List data (Welcome.html)

                    if(e.statusCode === 'PERMISSION_DENIED')
                        console.log("Please open new tab and hit 'plx/ to get SSO credential - dremelF.executeSQL");
                }
            );
        });

        function _parseData() {
            for(var i = 0; i < $scope.jsonFeatureAdoptionList.length; i++) {
                var issue = $scope.jsonFeatureAdoptionList[i];
                _getDeviceList(issue);
                _getOemListNDeviceNo(issue);
                _getFeatureList(issue);
            }
            _adjustDevicNo();
            _sortList();
            _generateAdoptionMatrix();
            _updateBugIdNSupportStatus();
        }

        function _updateBugIdNSupportStatus() {
            for(var i = 0; i < $scope.jsonFeatureAdoptionList.length; i++) {
                var issue = $scope.jsonFeatureAdoptionList[i];

                for(var featureCnt = 0; featureCnt < $scope.featureList.features.length; featureCnt++) {
                    var feature = $scope.featureList.features[featureCnt];

                    if(issue.feature_name === feature.name) {
                        for(var availableCnt = 0; availableCnt < feature.availability.length; availableCnt++) {
                            var availability = feature.availability[availableCnt];

                            if( issue.oem_name === availability.oemName && issue.product_marketing_name === availability.deviceName /*&& issue.launch_version === availability.launchVersion*/) {

                                availability.bug = issue.bug_id;
                                if(issue.support_status === 'Yes' || issue.support_status === 'No')
                                    availability.availability = issue.support_status;
                                else
                                    availability.availability = 'TBD';
                            }
                        }
                    }
                }
            }
        }


        function _generateAdoptionMatrix() {
            // generate device x feature matrix
            for(var cnt = 0; cnt < $scope.featureList.features.length; cnt++) {
                var feature = $scope.featureList.features[cnt];

                feature.availability = [];

                for(var deviceCnt = 0; deviceCnt <  $scope.deviceList.length; deviceCnt++) {
                    var device = $scope.deviceList[deviceCnt];

                    var deviceAvailInfo = new Object();
                    deviceAvailInfo.oemName = device.oemName;
                    deviceAvailInfo.deviceName = device.name;
                    deviceAvailInfo.launchVersion = device.launchversion;
                    deviceAvailInfo.availability = 'Unknown';
                    deviceAvailInfo.bug = '00000000';

                    feature.availability.push(deviceAvailInfo);
                }
            }
        }

        function _getFeatureList(issue) {
            var isFeatureFound = false;
            for(var cnt = 0; cnt < $scope.featureList.features.length; cnt++) {
                if($scope.featureList.features[cnt].name === issue.feature_name) {
                    isFeatureFound = true;
                }
            }
            if(!isFeatureFound) {
                var feature = new Array();
                feature.name = issue.feature_name;
                $scope.featureList.features.push(feature);
            }
        }


        function _getOemListNDeviceNo(issue) {
            var bOEMFound = false;

            for (var j = 0; j < $scope.oemList.length; j++) {
                if ($scope.oemList[j].name === issue.oem_name) {
                    $scope.oemList[j].colno += 1;
                    bOEMFound = true;
                    break;
                }
            }

            if (!bOEMFound) { // first found. Add OEM name with colno = 1;
                var oem = new Object();
                oem.name = issue.oem_name;
                oem.colno = 1;
                $scope.oemList.push(oem);
            }
        }

        function _getDeviceList(issue) {
            var bDeviceFound = false;

            for(var j = 0; j < $scope.deviceList.length; j++) {
                if($scope.deviceList[j].name === issue.product_marketing_name) {
                    bDeviceFound = true;
                    break;
                }
            }

            if(!bDeviceFound) {
                var deviceName = new Object();
                deviceName.name = issue.product_marketing_name;
                deviceName.launchversion = issue.launch_version;
                deviceName.oemName = issue.oem_name;
                $scope.deviceList.push(deviceName);
            }
        }

        function _sortList() {
            $scope.oemList.sort(sort_by('name', false, function(a){return a.toUpperCase()}));
            $scope.deviceList.sort(sort_by('oemName', false, function(a){return a.toUpperCase()}));
            $scope.featureList.features.sort(sort_by('name', false, function(a){return a.toUpperCase()}));
        }

        function _adjustDevicNo() {
            for (var j = 0; j < $scope.oemList.length; j++) {
                $scope.oemList[j].colno = $scope.oemList[j].colno/$scope.featureList.features.length;
            }
        }
      function sort_by(field, reverse,primer) {
            var key = primer ?
                function(x) {return primer(x[field])} :
                function(x) {return x[field]};

            reverse = !reverse ? 1 : -1;

            return function (a, b) {
                return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
            }
        }
        function _validateJsonData(json) {
            if(json === null || json === undefined || json.length <= 0)
                return false;

            return true;
        }


        function _onDataError(e) {
            if (e.getStatusText)
                console.log(e.getStatusText());
            else
                console.log(e);
        }
    });
})(window.angular);