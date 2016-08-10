(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChoiceController', ChoiceController);

    ChoiceController.$inject = ['ChoiceService'];

    function ChoiceController(ChoiceService) {
        /* jshint validthis:true */
        var vm = this;

        vm.choice = undefined;
        vm.stat = undefined;

        vm.choose = choose;

        function getChoices() {
            ChoiceService.getChoices().success(function (response) {
                vm.choice = response.choice;
                vm.stat = response.stat;

                preloader();
            });
        }

        function choose(choiceNb) {
            var chooseDTO = {
                id: vm.choice.id,
                choiceNb: choiceNb
            };

            ChoiceService.doChoose(chooseDTO).success(function (response) {
                getChoices();
            });
        }

        function preloader() {
            var preloader = $('.preloader');
            if (preloader != undefined) {
                preloader.remove();
            }
        }

        activate();

        function activate() {
            getChoices();
        }
    }
})();