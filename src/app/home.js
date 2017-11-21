/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, $location) {
        function  videoPlay(){
            $('video')[0].play();
        }
    }
})();