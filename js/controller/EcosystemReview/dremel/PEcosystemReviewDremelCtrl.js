
(function(angular) {
    'use strict';

    angular.module('ngAndroidNext99')
    .controller('ngPEcosystemReviewDremelCtrl', function($scope,dremelF) {

      $scope.topicList = [];
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function _drawChartTopicStatus() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Status');
        data.addColumn('number', 'IssueNumber');
        data.addRows([
          ['Active', 75],
          ['New', 12],
          ['Fixed', 20],
          ['Obsolete', 7]
        ]);

        // Set chart options
        var options = {
          //title: 'VoP Topic Status',
          //titleTextStyle: {color: 'black', fontName: 'Lato', fontSize: 12},
          is3D: true,
          legend: {position: 'labeled',  textStyle: {color: 'brown', fontSize: 8, fontName:'Lato'}},
          pieSliceText: 'label',
          pieSliceTextStyle:{color: 'white', fontName: 'Lato', fontSize: 12, bold:true},
          chartArea : {left:20, top:20, width:'100%',height:'100%'},
          'width':370,
          'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div_1'));
        chart.draw(data, options);
      }

      function _drawChartTopicStatusCopy() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Status');
        data.addColumn('number', 'IssueNumber');
        data.addRows([
          ['Active', 75],
          ['New', 12],
          ['Fixed', 20],
          ['Obsolete', 7]
        ]);

        // Set chart options
        var options = {
          //title: 'VoP Topic Status',
          //titleTextStyle: {color: 'black', fontName: 'Lato', fontSize: 12},
          is3D: true,
          legend: {position: 'labeled',  textStyle: {color: 'brown', fontSize: 8, fontName:'Lato'}},
          pieSliceText: 'label',
          pieSliceTextStyle:{color: 'white', fontName: 'Lato', fontSize: 12, bold:true},
          chartArea : {left:20, top:20, width:'100%',height:'100%'},
          'width':370,
          'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div_3'));
        chart.draw(data, options);
      }


      function _drawChartTopicCategory() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Status');
        data.addColumn('number', 'IssueNumber');
        data.addRows([
          ['CTS', 67],
          ['GTS', 13],
          ['GMSCore', 7],
          ['Security', 4],
          ['GOTA', 13],
          ['PAI', 4],
          ['3rd App Compat', 18],
          ['Others', 45]
        ]);

        // Set chart options
        var options = {
          //title: 'VoP Topic Category',
          //titleTextStyle: {color: 'black', fontName: 'Lato', fontSize: 12},
          is3D: true,
          legend: {position: 'labeled', textStyle: {color: 'brown', fontSize: 8, fontName:'Lato'}},
          pieSliceText: 'label',
          pieSliceTextStyle:{color: 'white', fontName: 'Lato', fontSize: 12, bold:true},
          chartArea : {left:20, top:20, width:'100%',height:'100%'},
          'width':370,
          'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart2 = new google.visualization.PieChart(document.getElementById('chart_div_2'));
        chart2.draw(data, options);
      }

      function _drawChartTopicCategoryCopy() {
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Status');
        data.addColumn('number', 'IssueNumber');
        data.addRows([
          ['CTS', 67],
          ['GTS', 13],
          ['GMSCore', 7],
          ['Security', 4],
          ['GOTA', 13],
          ['PAI', 4],
          ['3rd App Compat', 18],
          ['Others', 45]
        ]);

        // Set chart options
        var options = {
          //title: 'VoP Topic Category',
          //titleTextStyle: {color: 'black', fontName: 'Lato', fontSize: 12},
          is3D: true,
          legend: {position: 'labeled', textStyle: {color: 'brown', fontSize: 8, fontName:'Lato'}},
          pieSliceText: 'label',
          pieSliceTextStyle:{color: 'white', fontName: 'Lato', fontSize: 12, bold:true},
          chartArea : {left:20, top:20, width:'100%',height:'100%'},
          'width':370,
          'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart2 = new google.visualization.PieChart(document.getElementById('chart_div_4'));
        chart2.draw(data, options);
      }

      function _drawChartTopAccount() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Number of Topic', { role: 'style' } ],
          ['Samsung', 17, 'stroke-color: #703593; stroke-width: 4; fill-color: gray'],
          ['LG', 14, 'stroke-color: #703593; stroke-width: 4; fill-color: #76A7FA'],
          ['Motorola', 16, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['Huawei', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['HTC', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Nokia', 23, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Sony', 17, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Verizon', 3, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['Samsung', 17, 'stroke-color: #703593; stroke-width: 4; fill-color: gray'],
          ['LG', 14, 'stroke-color: #703593; stroke-width: 4; fill-color: #76A7FA'],
          ['Motorola', 16, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['Huawei', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['HTC', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Nokia', 23, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Sony', 17, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Verizon', 3, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['Samsung', 17, 'stroke-color: #703593; stroke-width: 4; fill-color: gray'],
          ['LG', 14, 'stroke-color: #703593; stroke-width: 4; fill-color: #76A7FA'],
          ['Motorola', 16, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['Huawei', 22, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
          ['HTC', 28, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Nokia', 23, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Sony', 17, 'stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2'],
          ['Verizon', 3, 'stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF'],
        ]);


        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
          { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
          2]);

        var options = {
          //title: "Number of VoP Topics per Partner",
//          width: 560,
//          height: 300,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("chart_div_5"));
        chart.draw(view, options);
      }


        $scope.init = function () {
        }

        angular.element(document).ready(function () {
          // Load the Visualization API and the corechart package.
          google.charts.load('current', {'packages':['corechart']});
          // Set a callback to run when the Google Visualization API is loaded.
          google.charts.setOnLoadCallback(_drawChartTopicStatus);
          google.charts.setOnLoadCallback(_drawChartTopicCategory);
          google.charts.setOnLoadCallback(_drawChartTopicStatusCopy);
          google.charts.setOnLoadCallback(_drawChartTopicCategoryCopy);
          google.charts.setOnLoadCallback(_drawChartTopAccount);
        });
    });
})(window.angular);