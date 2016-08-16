(function () {
    'use strict';

    angular
        .module('app')
        .controller('ParamsController', ParamsController);

    ParamsController.$inject = ['BgService'];

    function ParamsController(BgService) {
        /* jshint validthis:true */
        var vm = this;

        //public methods


        activate();

        function activate() { }
    }
})();
