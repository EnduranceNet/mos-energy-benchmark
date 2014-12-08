(function () {
'use strict';

    /**
     * @ngInject
     */
    function StateConfig($stateProvider) {
        $stateProvider.state('detail', {
            url: '/detail',
            templateUrl: 'scripts/views/detail/detail-partial.html',
            controller: 'DetailController'
        });
    }

    /**
     * @ngdoc overview
     * @name mos.views
     * @description
     * # mos
     */
    angular
      .module('mos.views.detail', [
        'ui.router'
      ]).config(StateConfig);

})();