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
        ResultData.callbacks.loadGraphs = loadGraphs;

        function loadGraphs() {
            //Line evolution
            var lineData = [], i = 1;
            _.forEach(ResultData.history.stats, function (obj) {
                lineData.push({ y: 'Choix ' + i, a: obj.percent});
                i++;
            });
            Morris.Line({
                element: 'evolution-line',
                data: lineData,
                xkey: 'y',
                ykeys: ['a'],
                labels: ['Evolution des choix'],
                ymax: 100,
                ymin: 0,
                parseTime: false,
                postUnits: '%',
                hideHover: 'always',
                resize: true
            });

            //Pie
            var var40 = 0, var60 = 0, var100 = 0;
            _.forEach(ResultData.history.stats, function (obj) {
                if(obj.percent < 40){
                    var40++;
                } else if(obj.percent < 60){
                    var60++;
                } else {
                    var100++;
                }
            });
            Morris.Donut({
                element: 'part-pie',
                data: [
                  { label: "moins de 40%", value: var40 },
                  { label: "entre 40% et 60%", value: var60 },
                  { label: "plus de 60%", value: var100 }
                ],
                colors: ['red', 'aqua', 'green'],
                resize: true
            });
        }

        activate();

        function activate() { }
    }
})();
