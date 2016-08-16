(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChoiceController', ChoiceController);

    ChoiceController.$inject = ['ChoiceService', 'spinnerService', 'BgService', 'ResultsService', 'ResultData'];

    function ChoiceController(ChoiceService, spinnerService, BgService, ResultsService, ResultData) {
        /* jshint validthis:true */
        var vm = this;

        //public vars
        vm.choice = undefined;
        vm.result = ResultData;
        vm.liked = false;
        vm.reported = false;

        //public methods
        vm.choose = choose;
        vm.like = like;
        vm.report = report;
        vm.add = addChoice;

        function getChoices() {
            //Re-initilaise view
            vm.liked = false;
            if (vm.reported) $('#reportChoice').popover('destroy');
            vm.reported = false;

            ChoiceService.getChoices().success(function (response) {
                if (response.id === 0)
                    getChoices();

                vm.choice = response;
                spinnerService.hide('choiceSpinner');
                BgService.firstLoad();
            });
        }

        function choose(choiceNb) {
            spinnerService.show('choiceSpinner');

            ResultsService.doChoice(vm.choice, choiceNb);
            
            var choice = {
                id: vm.choice.id,
                chosen1: 0,
                chosen2: 0
            };

            switch(choiceNb){
                case 1:
                    choice.chosen1 = 1;
                    break;
                case 2:
                    choice.chosen2 = 1;
                    break;
            }

            ChoiceService.doChoose(choice).success(function (response) {
                getChoices();
            });
        }

        function like() {
            if (!vm.liked) {
                vm.liked = true;
                vm.choice.likes += 1;

                ChoiceService.likeChoice(vm.choice.id).success(function (response) {
                    
                });
            }
        }

        function report() {
            if (!vm.reported) {
                vm.reported = true;

                ChoiceService.reportChoice(vm.choice.id).success(function (response) {

                    $('#reportChoice').popover({
                        title: "<span class=\"green\"><strong>Merci!</strong></span>",
                        content: "Ces choix ont été signalés, vous pouvez passer la question en cliquant sur <strong>OU</strong>.",
                        html: true,
                        placement: "top",
                        trigger: "manual"
                    });
                    $('#reportChoice').popover('show');
                });
            }
        }

        function addChoice() {
            ChoiceService.addChoice($('#g-recaptcha-response').val(), vm.choice1, vm.choice2).success(function (response) {

            });
        }


        activate();

        function activate() {
            getChoices();
        }
    }
})();