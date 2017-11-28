/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page2Controller', Page2Controller);

    /** @ngInject */
    function Page2Controller($scope, $location) {
        var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { transparent: true, autoResize: true });
        // $('.pagebtn').click(function(){
        //     $('.page-video').addClass('on');
        //     $('video')[0].play();
        //     $(this).addClass('on');
        // });

        // var audio=$('#audio')[0];
        // audio.loop = false;
        // setTimeout(function(){
        //     $('#audio')[0].addEventListener('ended', function () {
        //         console.log('over');
        //         // $('.page-video').empty();
        //         $('.pagevideo').addClass('on');
        //         $('.pbtn').find('div').addClass('on');
        //     }, false);
        // },5000);

        //画圆

        //测试
        // var canvas=document.getElementById("canvas");
        // var ctx=canvas.getContext('2d');
        // canvas.style.position="absolute";
        // canvas.style.bottom="14%";
        // canvas.style.left="16%";
        // ctx.beginPath();
        // ctx.arc(100,75,50,0,2*Math.PI);
        // ctx.lineWidth = 10;
        // ctx.fillStyle="red";
        // ctx.strokeStyle="#fff";
        // ctx.stroke();

        var canvas = document.createElement('canvas');
        var ctx=canvas.getContext('2d');
        canvas.id = 'canvas';
        canvas.style.position = "absolute";

        var unCanvas=document.createElement('canvas');
        var ctx1=canvas.getContext('2d');
        var arr = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        $('.cirle').append(canvas);

        // $('.cirle').on({
            // 'start': function(evt){
                
             
            // }
        //     'move':function(evt){
        //         console.log('hello')
        //         var e = evt || window.event;
        //         var x1 = e.touches[0].clientX;
        //         var y1 = e.touches[0].clientY;
        //         console.log(x1);
        //         console.log(y1);
        //         arr.push({  
        //             left:x1,
        //             top:y1,
        //         })
        //         //     ctx.beginPath();
        //         // ctx.arc(x,y,50,0,2*Math.PI);
        //         ctx.lineWidth = 10;
        //     }
        // });
        $('.cirle').on('touchstart touchmove',function(evt){
            console.log(evt.type);
            var e = evt || window.event;
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;
            if(e.type == 'touchstart'){
                $('.hand').removeClass('on');
                console.log(x);
                console.log(y);
                ctx1.moveTo(x,y);
            }else if(e.type == 'touchmove'){
                e.preventDefault();
                console.log(x);
                console.log(y);
                ctx1.lineTo(x,y);
                ctx1.strokeStyle="#fff";
                ctx1.lineWidth=5;
                ctx1.stroke();
            }
            arr.push({  
                left:x,
                top:y
            })
        })

        $('.cirle').on('touchend', function () {
            
        })
    };
   
    window.onresize = function () {
        console.log($('#audio')[0].style.width = window.innerWidth + "px");
        console.log($('#audio')[0].style.height = window.innerHeight + "px");
    }
})();