/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController($scope, $location) {
        $('.btnnull').click(function(){
            $('.play-video').addClass('on');
            $('video')[0].play();
        });

        var audio=$('#audio')[0];
        // audio.loop = false;
        setTimeout(function(){
            audio.addEventListener('ended', function () {
                console.log('over');
                $('.play-video').empty();
                $('.pic-video').addClass('on');
                $('.btnshare').find('a').addClass('on');
            }, false);
        },5000)
    }
})();


// $('.null').click(function(){
//     $('.play-video').addClass('on');
//     $('video')[0].play();
// });

// var audio=$('#audio')[0];
// // var audio = document.getElementById("audio");
// // audio.loop = false;
// setTimeout(function(){
//     audio.addEventListener('ended', function () {
//         console.log('over');
//         $('.play-video').empty();
//         $('.endvideo').addClass('on');
//         $('.btnshare').find('a').addClass('on');
//     }, false);
// },5000)
