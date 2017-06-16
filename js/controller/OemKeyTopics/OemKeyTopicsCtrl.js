
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
        .controller('ngOemKeyTopicsCtrl', function($scope, buganizerF) {

            $scope.topiclistSamsung = [];
            $scope.topicListLge = [];
            $scope.topicListMoto = [];

            $scope.pageTitle = 'OEM Key Topics';

            angular.element(document).ready(function () {
                buganizerF.initIssueTrackerAPI().then(
                    // success function
                    function(authResult) {
                        getList('OEMKeyTopicsSamsung');
                    },
                    //error function
                    function(authResult) {
                        console.log("failed in init API - initIssueTrackerAPI - NFeatureCtrl.js");
                    }
                );
            });


            function getList(hotlist) {
                // call function to retrieve bugs by hotlist
                buganizerF.getKeyTopics(hotlist).then(
                    //success function
                    function(response) {
                        _parseData(response, hotlist);

                        if(hotlist === 'OEMKeyTopicsSamsung') {
                            getList('OEMKeyTopicsLGE');
                        } else if (hotlist === 'OEMKeyTopicsLGE') {
                            getList('OEMKeyTopicsMotorola');
                        }
                    },
                    //error function
                    function (msg) {
                        console.log('failed to retrieve hotlist and its bug list - initIssueTrackerAPI - NFeatureCtrl.js');
                    }
                );
            }

            $scope.onClicked = function (topic) {
                // alert('title:' + topic.title);
                console.log(topic.summary);

                for(var cnt = 0; cnt < $scope.topiclistSamsung.length; cnt++) {
                    var item = $scope.topiclistSamsung[cnt];
                    if (item.bugId === topic.bugId) {
                        topic.isClicked = !topic.isClicked;
                    }
                }
            };

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
                    topic.isClicked = false;
                    topic.summary = "The Sweet Track is an ancient causeway in the Somerset Levels, England. Built in 3807 or 3806 BC along an earlier structure, the Post Track, it was the oldest unearthed timber trackway in Northern Europe until the 2009 discovery of a 6,000-year-old trackway in Plumstead, London. It extended close to 2,000 metres (6,600 ft) across the now largely drained marsh between what was then an island at Westhay and a ridge of high ground at Shapwick.";

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

        });
})(window.angular);