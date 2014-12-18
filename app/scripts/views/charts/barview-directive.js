(function () {
    'use strict';

    /**
     * ngInject
     */
    function barView () {
        // Begin directive module definition
        var module = {};

        module.restrict = 'EA';
        module.templateUrl = 'scripts/views/charts/barview-partial.html';

        module.scope = {
            data: '=' // Required
        };

        module.link = function($scope, element, attrs) {
            $scope.selectOptions = {
                totalenergy: 'Total Energy Used',
                totalemissions: 'Total Emissions',
                count: 'Building count',
                avgenergystar: 'Mean Energy Star'
            };
            var selectUnits = {
                totalenergy: 'BTUs',
                totalemissions: '',
                avgenergystar: '',
                count: ''
            };
            $scope.selectedY = 'totalenergy';
            $scope.selectLabel = $scope.selectOptions[$scope.selectedY];
            $scope.selectUnit = selectUnits[$scope.selectedY];
            $scope.$watch('selectedY', function(newValue) {
                $scope.selectLabel = $scope.selectOptions[newValue];
                $scope.selectUnit = selectUnits[newValue];
            });
            $scope.selectedYChanged = function(key) {
                $scope.selectedY = key;
            };
        };

        return module;
    }

    angular.module('mos.charting')
        .directive('mosBarview', barView);

})();
