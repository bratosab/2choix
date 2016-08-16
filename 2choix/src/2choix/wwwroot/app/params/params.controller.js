﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('ParamsController', ParamsController);

    ParamsController.$inject = ['BgService'];

    function ParamsController(BgService) {
        /* jshint validthis:true */
        var vm = this;

        //public methods
        vm.loadBg = BgService.loadBg;

        activate();

        function activate() { }
    }
})();