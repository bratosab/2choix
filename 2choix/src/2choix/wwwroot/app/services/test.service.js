(function () {
    'use strict';

    angular
        .module('app')
        .factory('test', test);

    test.$inject = ['$http'];

    function test($http) {
        var service = {
            getData: getData
        };

        return service;

        function getData() { }
    }
})();