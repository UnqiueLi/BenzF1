/// <reference path="lib/seco-helper.js" />
var sc = sc || {};
sc.isAndroid = /android/i.test(navigator.userAgent);
sc.isIphone = /iphone/i.test(navigator.userAgent);
sc.getWxUser = false;
sc.wxUser = {};

(function () {
    var currentArea = getQueryString('a');

    sc.utm_source = getQueryString('utm_source') || '无来源';
    sc.utm_campaign = getQueryString('utm_campaign') || '';
    sc.utm_medium = getQueryString('utm_medium') || '';
})();

//based url detection
sc.baseUrl = (window.location.href.match(/^http[^#?]+\//i) || [])[0] || '';

(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngAnimate',
            'hmTouchEvents',
            'wilddog'
        ])
        .config(config)
        .controller('RootContorller', RootContorller)
        .controller('PageController', PageController)

        //模块初始化代码
        .run(['$location', '$rootScope', '$anchorScroll', '$http', function ($location, $rootScope, $anchorScroll, $http) {

            $rootScope.$on('$routeChangeSuccess', function (event, newUrl, oldUrl, wxGetConfig, wxConfig) {

                // 获取屏幕高度，并将其设置为body元素最小高度，防止安卓下表单输入时的上弹
                if (sc.isAndroid) {
                    var minHeight = $(document).height();
                    $("body").css("min-height", minHeight);
                }

                //禁止微信内向下拉动
                // document.querySelector('body').addEventListener('touchmove', function(e) {
                //     e.preventDefault();
                // })

                //切换页面后移除分享浮层
                $('.share').removeClass('on');
                sc.part && sc.part.stop();

                //当前路径
                var curPath = $location.path();
                gaPage(curPath);

                $('body').scrollTop(0);

                //跳转子锚点
                // setTimeout(function() {
                // if ($location.hash()) {
                // $anchorScroll();
                // }
                // }, 200);

                sc.goSecEnable = true;

                //和autoscroll配合使用
                $rootScope.scrollTop = function () {
                    return !$location.hash();
                };


                window.addEventListener('orientationchange', ori);
                setTimeout(function () {
                    ori();
                }, 500);

                function ori() {
                    var o = window.orientation;
                    if (o == 0) $rootScope.$broadcast('portrait');
                    else $rootScope.$broadcast('landscape');
                };

            });

            $rootScope.$on("$locationChangeSuccess", function (event, cur, prev) {

            });

            $rootScope.$on("$viewContentLoaded", function (event) {});
        }]);

    /** @ngInject */
    function RootContorller($scope, $location, wxGetConfig, wxConfig, dataService, pjUtils, wpDataService) {
        if (!window.requestAnimFrame) {
            window.requestAnimFrame = (function (callback) {
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
            })();
        }

        if (sc.isAndroid) {
            $('html').addClass('android');
        };

        // var videoBox = '.play-video';
        // sc.video = createPlayVideo2(videoBox, 'assets/video1.mp4', function () { }, function () { }, 20);



        // $scope.backHome = function () {
        //     $('.chapter1').fadeOut(0);
        //     $('.play-video').removeClass('on');
        //     $('video').each(function (i, v) {
        //         $(v).parent().removeClass('on');
        //         v.pause();
        //         v.currentTime = 0;
        //     })

        //     if (sc.isAndroid) {
        //         sc.video1.src = 'assets/c-1.mp4';
        //     } else {
        //         setTimeout(function () {
        //             sc.video1.src = 'assets/c-1.mp4';
        //         }, 1000);
        //     }
        // };

        // $scope.skipVideo = function () {
        //     $('video').each(function (i, v) {
        //         if (!v.paused) {
        //             v.currentTime += 10;
        //         }
        //     });
        // };

        function wxInit() {
            var wxshare = {
                ftitle: '郑钧的跨界新作，不止挑逗你的耳朵',
                fdesc: '何谓人生如金时刻？这部小说，要你调动全部感官去感悟。',

                ttitle: '郑钧写了一部小说，要你调动全部感官去阅读',
                imgUrl: sc.baseUrl + 'assets/images/share.jpg',
                link: sc.baseUrl,
                success: function () {
                    gaEvent('微信分享', '好友', sc.utm_source);
                },
                tsuccess: function () {
                    gaEvent('微信分享', '朋友圈', sc.utm_source);
                }
            };
            wxGetConfig.main().then(function () {
                wxConfig.main(wxshare);
            });
        };
        wxInit();
    };

    function config($routeProvider) {
        if (sc.getWxUser) {
            var wxCode = (window.location.href.match(/code=[a-z0-9]+(&|$)/i) || [])[0] || '';

            if (!wxCode) {
                window.location.href = sc.baseUrl + 'wxcode.php';
                return;
            } else {
                $.post(sc.baseUrl + 'wxuser.php?' + wxCode, function (data) {
                    sc.wxUser = data;
                    //alert(sc.wxUser.headimgurl);
                    if (!sc.wxUser.headimgurl) {
                        window.location.href = sc.baseUrl + 'wxcode.php';
                    }
                });
            }
        }

        // route configuration
        $routeProvider
       
            .when('/home', {
                templateUrl: 'app/home.html',
                controller: 'HomeController'
            })
            // page2
            .when('/', {
                templateUrl: 'app/page2.html',
                controller: 'Page2Controller'
            })
            .otherwise('/');
    }

    function PageController($scope, $location) { }
})();
