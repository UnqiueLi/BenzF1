/// <reference path='lib/seco-helper.js' />

(function () {
    'use strict';

    angular
        .module('app')
        .controller('Page2Controller', Page2Controller);

    /** @ngInject */
    function Page2Controller($scope, $location) {
        var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, { transparent: true, autoResize: true });
        $('.pagebtn').click(function () {
            $('.page-video').addClass('on');
            $('video')[0].play();
            $(this).addClass('on');
        });

        var audio = $('#audio')[0];
        audio.loop = false;
        setTimeout(function () {
            $('#audio')[0].addEventListener('ended', function () {
                console.log('over');
                // $('.page-video').empty();
                $('.pagevideo').addClass('on');
                $('.pbtn').find('div').addClass('on');
            }, false);
        }, 5000);

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
        // $('.pagevideo').addClass('on');
        //         $('.pbtn').find('div').addClass('on');
        //大面积画布
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.id = 'canvas';
        canvas.style.position = "absolute";
        //下端解锁的画布
        var unCanvas = document.createElement('canvas');
        var ctx1 = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        $('.cirle').append(canvas);
        ctx1.beginPath();
        ctx1.fillStyle = "#fff";
        ctx1.closePath();
        var arr = [];
        $('.cirle').on('touchstart touchmove touchend', function (evt) {
            console.log(evt.type);
            var e = evt || window.event;
            TweenMax.to($('.btnarrow'), 2, {
                opacity: .5,
                rotation: '180deg'
            });
            if (e.type == 'touchstart') {
                $('.hand').removeClass('on');
                console.log(x);
                console.log(y);
                ctx1.moveTo(x, y);
            } else if (e.type == 'touchmove') {
                var x = e.touches[0].clientX;
                var y = e.touches[0].clientY;
                e.preventDefault();
                console.log(x);
                console.log(y);
                ctx1.lineTo(x, y);
                ctx1.strokeStyle = "#fff";
                ctx1.lineWidth = 5;
                ctx1.stroke();
                arr.push({
                    left: x,
                    top: y
                })
                console.log(arr.length);
                var index = arr.length;
                TweenMax.to($('.btnarrow img'), .1, {
                    rotation: -index * index * .5,
                });
            } else if (e.type == 'touchend') {
                console.log(arr);
                var result = [];
                for (var i = 0; i < arr.length; i++) {
                    // console.log('top:' + arr[i].top, 'left:' + arr[i].left);
                    // console.log(arr.length)
                    if (arr[i].top > 500) {
                        result.push({
                            top: arr[i].top,
                            left: arr[i].left
                        })
                    }
                }
                // console.log(result);
                console.log('result' + result.length);
                console.log('arrcount' + arr.length);
                var point = result.length / arr.length * 100;
                console.log(point);
                if (point > 50) {
                    $('.box').addClass('on');
                    $('.pagevideo').removeClass('on');
                    $('.pbtn').find('div').removeClass('on');
                } else {
                    $('.hand').addClass('on');
                    TweenMax.to($('.btnarrow img'), 2, {
                        rotation: 0,
                    });
                }
                arr = [];
            }
        });
        //第一种方法 累计top的值
        //第二种，建立一个新的空数组，push进去，利用下表索引做动画
        // function comparePoint(arr){
        //     console.log(arr);
        //     var count=0;
        //     for(var i=0;i<arr.length;i++){
        //         console.log(left,top);
        //         if(arr[i].top>500){
        //             count++;
        //         }
        //计算点在页面画布上的百分比

        //         return count/arr.length*100;
        //     }
        // }
    };

    window.onresize = function () {
        console.log($('#audio')[0].style.width = window.innerWidth + "px");
        console.log($('#audio')[0].style.height = window.innerHeight + "px");
    }
})();