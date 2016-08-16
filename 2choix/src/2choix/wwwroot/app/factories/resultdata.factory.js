(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResultData', ResultData);

    function ResultData() {
        return {
            stat: {
                value: 0,
                show: false,
                cssclass: ""
            },
            history: {
                stats: []
            },
            callbacks: {
                loadGraphs: undefined
            },
            nbOfAnswers: 0,
            nbOfIgnores: 0,
            totalPercent: 0
        };
    }
})();