(function () {
    'use strict';

    angular
        .module('app')
        .service('BgService', BgService);

    function BgService() {
        this.firstLoad = firstLoad;
        this.loadBg = loadBg;

        var isFirstLoad = true;

        function firstLoad() {
            if (isFirstLoad) {
                loadBg();
                firstLoad = false;
            }
        }

        function removePreloader() {
            if (isFirstLoad) {
                var preloader = $('.preloader');

                if (preloader !== undefined) {
                    preloader.remove();
                }
            }
        }

        function loadBg() {
            //timeout timer
            var timer;

            function clearTimer() {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
            }

            function handleFail() {
                // kill previous error handlers
                this.onload = this.onabort = this.onerror = function () { };
                // stop existing timer
                clearTimer();
                // Stop preloader and continue with default image
                removePreloader();
            }

            var curImg = new Image();

            curImg.onload = function () {
                $('#mainBanner').css("background-image", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://source.unsplash.com/category/nature/1600x900)");

                removePreloader();
            };

            curImg.onerror = curImg.onabort = handleFail;

            timer = setTimeout(function (theImg) {
                return function () {
                    handleFail.call(theImg);
                };
            }(curImg), 6000);

            //start loading
            curImg.src = "https://source.unsplash.com/category/nature/1600x900";
        }
    }
})();