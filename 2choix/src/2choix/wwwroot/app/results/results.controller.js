(function () {
    'use strict';

    angular
        .module('app')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['ResultData'];

    function ResultsController(ResultData) {
        /* jshint validthis:true */
        var vm = this;
        vm.result = ResultData;



        activate();

        function activate() { }
    }
})();
