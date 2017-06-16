
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngOemKeyTopicsDremelCtrl', function($scope, dremelF) {

            $scope.topiclistSamsung = [];
            $scope.topicListLge = [];
            $scope.topicListMoto = [];

            $scope.pageTitle = 'OEM Key Topics';


            angular.element(document).ready(function () {

                dremelF.executeSQLEx('OEMTopic','Samsung').then(
                    // success function
                    function(jsonData) {
                        $scope.topiclistSamsung = jsonData;

                        if(_validateJsonData($scope.jsonFeatureAdoptionList) === false) {
                            console.log("Succeeded in executing SQL. No data exisiting - dremelF.executeSQL");
                        } else {
                            console.log("Succeeded in retrieving data out of Dremel - dremelF.executeSQL");
                            _parseData();
                        }
                    },
                    // error function
                    function(e) {
                        _onDataError(e);

                        if(e.statusCode === 'PERMISSION_DENIED')
                            console.log("Please open new tab and hit 'plx/ to get SSO credential - dremelF.executeSQL");
                    }
                );
            });


            function _parseData(response, hotlist) {

                if(!response) {
                    console.log('Bad Query executed - _parseData - ngOemKeyTopicsCtrl.js');
                    return;
                }

                if (!response['hotlistEntries']) {
                    console.log('No data existing - _parseData - ngOemKeyTopicsCtrl.js');
                    return;
                }

                for(var i = 0; i < response.hotlistEntries.length; i++)  {
                    var issue = response.hotlistEntries[i];

                    var topic = new Object;
                    topic.title = issue.issue.issueState.title;
                    topic.priority = issue.issue.issueState.priority;
                    topic.bugId = issue.issueId;

                    switch(issue.issue.issueState.status) {
                        case 'NEW':
                            topic.status = 'New';
                            topic.color = 'text-primary';
                            break;
                        case 'ASSIGNED':
                        case 'ACCEPTED':
                            topic.status = 'Active';
                            topic.color = 'text-warning';
                            break;
                        case 'FIXED':
                            topic.status = 'Resolved';
                            topic.color = 'text-success';
                            break;
                        default:
                            topic.status = 'Obsolete';
                            topic.color = 'text-muted';
                            break;
                    }

                    if(hotlist === 'OEMKeyTopicsSamsung') {
                        $scope.topiclistSamsung.push(topic);
                    } else if (hotlist === 'OEMKeyTopicsLGE') {
                        $scope.topicListLge.push(topic);
                    } else {
                        $scope.topicListMoto.push(topic);
                    }
                }
            }


            function _onDataError(e) {
                if (e.getStatusText)
                    console.log(e.getStatusText());
                else
                    console.log(e);
            }

        });
})(window.angular);