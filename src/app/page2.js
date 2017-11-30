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
                $('.cirle').addClass('on');
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
        // $('.pbtn').find('div').addClass('on');
        //大面积画布
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.id = 'canvas';
        canvas.style.position = "absolute";
        //下端解锁的画布
        var unCanvas = document.createElement('canvas');
        var ctx1 = canvas.getContext('2d');

        var flag = false;    //启动的标志

        $('.cirle').append(canvas);
        canvas.width = window.innerWidth || document.documentElement.clientWidth;
        canvas.height = window.innerHeight ||  document.documentElement.clientHeight;

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
                // console.log(x);
                // console.log(y);
                // ctx1.moveTo(x, y);

                flag=true;
                doSpawn(e,35*Math.random()+35);
            } else if (e.type == 'touchmove') {
                // var x = e.touches[0].clientX;
                // var y = e.touches[0].clientY;
                // e.preventDefault();
                // console.log(x);
                // console.log(y);
                // ctx1.lineTo(x, y);
                // ctx1.strokeStyle = randomColor();
                // ctx1.lineWidth = 5;
                // ctx1.stroke();
                if(flag){
                    doSpawn(e,9);
                }
                // arr.push({
                //     left: x,
                //     top: y
                // })
                console.log(arr.length);
                var index = arr.length;
                TweenMax.to($('.btnarrow img'), .1, {
                    rotation: -index * index * .5,
                });
            } else if (e.type == 'touchend') {
                console.log(arr);
                flag=false;
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

        var arr = [];
        animate();
        function animate(){
            setInterval(function(){
                render();
                area();
            },1000/60)
        }
        function doSpawn(e,n){   //设置孵化器的生产数量
            var x = e.clientX || e.touches[0].pageX;  //鼠标坐标||移动端触摸坐标
            var y = e.clientY || e.touches[0].pageY;
            for (var i=0;i<n;i++){
                Spawn(x,y);
            }
        }
        function Spawn(x,y){   //孵化器，生成一个原点对象
            var particle=new Particle();
            particle.init(x,y);
            arr.push(particle);
    
        }
        function render(){    //把生成的原点渲染出来
            ctx.clearRect(0,0,canvas.width,canvas.height);
            for(var i = 0,len = arr.length; i < len; i++){
                arr[i].draw();
                arr[i].update();
            }
        }
        function area(){  //半径足够小的时候删除该点
            var n = 0;
            for( var i = 0, l = arr.length; i < l; i++ ) {
                if (arr[i].r >1 ) {
                    arr[n++] = arr[i];
                }
            }
            while( arr.length > Math.min(700,n) ) {
                arr.pop();
            }
        }
        function Particle(){}  //构造函数，小球原型
        Particle.prototype={
            init:function(x,y){  //初始化小球各项数据
                this.x = x || 0.0;
                this.y = y || 0.0;
                this.r = 10*Math.random() + 10 || 40;
                this.color = randomColor();
                this.theta = Math.random()*2*Math.PI;
                this.R = Math.random()*4 + 2;
                this.vx = Math.cos(this.theta)*this.R;
                this.vy = Math.sin(this.theta)*this.R;
            },
            draw:function(){    //画出一个球的方法
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
                ctx.fillStyle = this.color;
                ctx.fill();
            },
            update:function(){    //改变球的各项属相的方法
                this.x += this.vx;
                this.y += this.vy;
                this.vx += Math.cos(this.theta)*.1;
                this.vy += Math.sin(this.theta)*.1;
                this.vx *= .94;
                this.vy *= .94;    //给速度设置一个衰减系数
                this.r *=.92;
                this.color = randomColor(); //动态改变圆点的颜色达到闪烁的效果
            }
        };
     //随机16进制颜色
     function randomColor() {
        return "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ",1)";
    }
    };

    window.onresize = function () {
        console.log($('#audio')[0].style.width = window.innerWidth + "px");
        console.log($('#audio')[0].style.height = window.innerHeight + "px");
    }
})();