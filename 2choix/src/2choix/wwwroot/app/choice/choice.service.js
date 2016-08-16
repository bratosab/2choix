(function () {
    'use strict';

    angular
        .module('app')
        .service('ChoiceService', ChoiceService);

    ChoiceService.$inject = ['$http'];

    function ChoiceService($http) {
        this.getChoices = getChoices;
        this.doChoose = doChoose;
        this.likeChoice = likeChoice;
        this.reportChoice = reportChoice;
        this.addChoice = addChoice;

        //GET : fetchs a proposition
        function getChoices() {
            return $http({
                method: 'GET',
                url: '/api/choice'
            });
        }

        //POST : Add choice
        function addChoice(recaptcha, choice1, choice2) {
            var data = {
                choice1: choice1,
                choice2: choice2,
                recaptcha: recaptcha
            };
            return $http({
                method: 'POST',
                url: '/api/choice',
                data: data
            });
        }

        //PATCH : choice is sumbitted
        function doChoose(choice) {
            return $http({
                method: 'PATCH',
                url: '/api/choice',
                data: choice
            });
        }

        //PUT : likes the choice
        function likeChoice(id) {
            return $http({
                method: 'PUT',
                url: '/api/choice/' + id
            });
        }

        //DELETE : reports the choice
        function reportChoice(id) {
            return $http({
                method: 'DELETE',
                url: '/api/choice/' + id
            });
        }
    }
})();