/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page2Controller', Page2Controller);

    /** @ngInject */
    function Page2Controller($scope, $location) {
        // var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { transparent: true, autoResize: true });
        $('.pagebtn').click(function(){
            $('.page-video').addClass('on');
            $('video')[0].play();
        });

        // var audio=$('#audio')[0];
        // audio.loop = false;
        setTimeout(function(){
            $('#audio')[0].addEventListener('ended', function () {
                console.log('over');
                $('.page-video').empty();
                $('.pagevideo').addClass('on');
                $('.pbtn').find('div').addClass('on');
            }, false);
        },5000)
    }


    console.log("aaaa");
    // window.onresize = function (event) {
    //     renderer.resize(window.innerWidth, window.innerHeight);
    // };
    window.onresize = function(){
       console.log( $('#audio')[0].style.width = window.innerWidth + "px") ;
      console.log( $('#audio')[0].style.height = window.innerHeight + "px");
      }

})();