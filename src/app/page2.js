/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page2Controller', Page2Controller);

    /** @ngInject */
    function Page2Controller($scope, $location) {
        $('.pagebtn').click(function(){
            $('.page-video').addClass('on');
            $('video')[0].play();
        });

        var audio=$('#audio')[0];
        // audio.loop = false;
        setTimeout(function(){
            audio.addEventListener('ended', function () {
                console.log('over');
                $('.page-video').empty();
                $('.pagevideo').addClass('on');
                $('.pbtn').find('div').addClass('on');
            }, false);
        },5000)
    }
})();