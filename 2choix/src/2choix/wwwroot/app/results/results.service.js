(function () {
    'use strict';

    angular
        .module('app')
        .service('ResultsService', ResultsService);

    ResultsService.$inject = ['ResultData'];

    function ResultsService(ResultData) {
        this.doChoice = doChoice;

        var choicesStat = [];

        function doChoice(choice, choiceNb) {
            ResultData.nbOfAnswers += 1;
            ResultData.stat.show = false;

            switch (choiceNb) {
                case 0:
                    ResultData.nbOfIgnores += 1;
                    break;
                case 1:
                    calcStat(choice.chosen1, choice.chosen1 + choice.chosen2);
                    break;
                case 2:
                    calcStat(choice.chosen2, choice.chosen1 + choice.chosen2);
                    break;
            }
        }

        function calcStat(nbChoice, nbTotal) {
            nbChoice++;
            nbTotal++;

            choicesStat.push({ nbChoice: nbChoice, nbTotal: nbTotal });

            //Calculate current percentage
            var curPercent = Math.round((nbChoice) / (nbTotal) * 100);

            ResultData.stat.value = curPercent;

            if (curPercent < 40) {
                ResultData.stat.cssclass = "red";
            } else if (curPercent < 60) {
                ResultData.stat.cssclass = "blue";
            } else {
                ResultData.stat.cssclass = "green";
            }

            ResultData.stat.show = true;

            //Calculate total percentage
            var totNbChoice = 0, totNbTotal = 0;
            _.forEach(choicesStat, function (obj) {
                totNbChoice += obj.nbChoice;
                totNbTotal += obj.nbTotal;
            });

            ResultData.totalPercent = Math.round((totNbChoice) / (totNbTotal) * 100);
        }
    }
})();