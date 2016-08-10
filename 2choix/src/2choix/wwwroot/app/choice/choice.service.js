(function () {
    'use strict';

    angular
        .module('app')
        .service('ChoiceService', ChoiceService);

    ChoiceService.$inject = ['$http'];

    function ChoiceService($http) {
        this.getChoices = getChoices;
        this.doChoose = doChoose;

        function getChoices() {
            return $http({
                method: 'GET',
                url: '/api/choice'
            });
        }

        function doChoose(choice) {
            return $http({
                method: 'POST',
                url: '/api/choice',
                data: choice
            });
        }
    }
})();