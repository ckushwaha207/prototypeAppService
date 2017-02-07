(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$state', '$scope', '$timeout'];

    function DashboardController($state, $scope, $timeout) {
        var vm = this;
        var line = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            series: ['Sales'],
            data: [
              [10, 59, 40, 81, 56, 55, 80, 14, 135, 32, 45, 80]
            ],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        },
                        type: 'linear'
                    }]
                }
            },
            onClick: function (points, evt) {
              console.log(points, evt);
            },
            onHover: function (points, evt) {
              console.log(points, evt);
            }
        };

        vm.chart = [];
        vm.chart.line = line;
    }
})();
