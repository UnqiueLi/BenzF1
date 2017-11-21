(function () {
    'use strict';

    var app = angular.module('app')
        // 微信分享认证
        .factory('wxGetConfig', ['$location', '$rootScope', '$http', function ($location, $rootScope, $http) {
            return {
                main: function () {
                    //微信分享自定义配置start->
                    var url = 'https://event.secoinfo.net/weixin/wx-benz.php';
                    if (/secoinfo.net/i.test(sc.baseUrl)) {
                        url = 'https://event.secoinfo.net/weixin/wx.php';
                    }

                    var jsApiList = [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                    ];

                    return new Promise(function (resolve) {
                        //微信初始化及自定义分享函数->
                        $http.get(url).success(function (data) {
                            wx.config({
                                // debug: true,
                                appId: data.appId,
                                timestamp: data.timestamp,
                                nonceStr: data.nonceStr,
                                signature: data.signature,
                                jsApiList: jsApiList,
                            });
                            resolve();
                        }).error(function () {
                            console.warn('微信自定义分享初始化出错，调用wx.php失败！');
                        });

                    })
                }
            }
        }])

        // 微信分享接口配置
        .factory('wxConfig', ['$location', '$http', function ($location, $http) {
            return {
                main: function (wxshare) {
                    //微信分享接口->
                    if (window.wx) {
                        wx.ready(function () {
                            // alert('yes');
                            wx.onMenuShareTimeline({
                                title: wxshare.ttitle,
                                link: wxshare.link,
                                imgUrl: wxshare.imgUrl,
                                success: wxshare.tsuccess
                            });
                            wx.onMenuShareAppMessage({
                                title: wxshare.ftitle,
                                desc: wxshare.fdesc,
                                link: wxshare.link,
                                imgUrl: wxshare.imgUrl,
                                success: wxshare.success
                            });
                        });
                    }
                    // <-end
                }
            }

        }])

        .directive('renderer', function () {
            return {
                link: function (scope, element, attrs) {
                    scope.addRenderer = function (renderer) {
                        element[0].appendChild(renderer.view);
                    };
                }
            };
        })

        .directive('renderer2', function () {
            return {
                link: function (scope, element, attrs) {
                    scope.addRenderer2 = function (renderer) {
                        element[0].appendChild(renderer.view);
                    };
                }
            };
        })

        .directive('dotSwitch', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        var checked = $(element[0]).is(':checked');
                        if (checked) {
                            $(attrs.dotSwitch).addClass('on');
                        } else {
                            $(attrs.dotSwitch).removeClass('on');
                        }
                    });
                }
            };
        })

        .directive('playVideo', function () {
            return {
                link: function (scope, element, attrs) {
                    var video = attrs.playVideo;
                    element.click(function () {
                        $(video).fadeIn();
                        $(video).addClass('on');
                        $(video).find('video')[0].play();                       
                    });
                    $(video).find('.bg').click(function () {
                        $(video).fadeOut();
                        $(video).find('video')[0].pause();
                    })
                }
            };
        })

        .directive('carousel', function () {
            return {
                link: function (scope, element, attrs) {
                    var el = element;
                    setTimeout(function () {
                        $(el).owlCarousel({
                            responsive: {
                                0: {
                                    items: 1
                                }
                            },
                            touchDrag: false,
                        });
                        sc.owl = element;
                    }, 0);
                }
            };
        })

        .directive('toCarousel', function () {
            return {
                link: function (scope, element, attrs) {
                    var carousel = $('.gallery');
                    if (attrs.toCarousel) {
                        var num = attrs.toCarousel[0];
                        element.click(function () {
                            carousel.addClass('on');
                            sc.owl.trigger('to.owl.carousel', [num]);
                        });
                    }
                }
            };
        })

        .directive('scOnSwitch', function () {
            return {
                link: function (scope, element, attrs) {
                    element.children().click(function () {
                        if (attrs.scOnSwitch) {
                            var index = $(this).index();
                            $(attrs.scOnSwitch).each(function () {
                                $(this).children().eq(index).addClass('on').siblings().removeClass('on');
                            });
                        } else {
                            $(this).addClass('on').siblings().removeClass('on');
                        }
                    });
                }
            }
        })

        .directive('scOnAdd', ['$animate', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        if (attrs.scOnAdd) {
                            $(attrs.scOnAdd).each(function () {
                                var self = this;
                                scope.$apply(function () {
                                    $(self).addClass('on');
                                });
                            });
                        } else {
                            scope.$apply(function () {
                                element.addClass('on');
                            });
                        }
                    });
                }
            }
        }])

        .directive('scOnRemove', ['$animate', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        if (attrs.scOnRemove) {
                            $(attrs.scOnRemove).each(function () {
                                var self = this;
                                scope.$apply(function () {
                                    $(self).removeClass('on');
                                });
                            });
                        } else {
                            scope.$apply(function () {
                                element.removeClass('on');
                            });
                        }
                    });
                }
            }
        }])

        .directive('scOnToggle', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        if (attrs.scOnToggle) {
                            if ($(attrs.scOnToggle).hasClass('on')) {
                                $(attrs.scOnToggle).each(function () {
                                    $(this).removeClass('on');
                                });
                            } else {
                                $(attrs.scOnToggle).each(function () {
                                    $(this).addClass('on');
                                });
                            }
                        } else {
                            if (element.hasClass('on')) {
                                element.removeClass('on');
                            } else {
                                element.addClass('on');
                            }
                        }
                    });
                }
            }
        })

        .directive('scOnDelay', ['$timeout', function ($timeout) {
            return {
                link: function (scope, element, attrs) {
                    $timeout(function () {
                        scope.$apply(function () {
                            element.addClass('on');
                        });
                    }, attrs.scOnDelay);
                }
            };
        }])

        .directive('scMusic', function () {
            return {
                link: function (scope, element, attrs) {
                    var player = element.find('audio')[0];

                    player.onplay = function () {
                        scope.$apply(function () {
                            element.addClass('on');
                        });
                    };

                    player.onpause = function () {
                        scope.$apply(function () {
                            element.removeClass('on');
                        });
                    };

                    player.src = attrs.scMusic;
                    // player.autoplay = true;
                    player.loop = true;

                    element.click(function () {
                        if (player.paused) {
                            player.play();
                        } else {
                            player.pause();
                        }
                    });
                }
            };
        })

        .directive('scOnPath', ['$location', function ($location) {
            return {
                link: function (scope, element, attrs) {
                    scope.$on('$routeChangeSuccess', function (event, newUrl, oldUrl) {
                        var path = $location.path();
                        if (!path || !attrs.scOnPath) {
                            return;
                        }
                        if (attrs.exact && attrs.scOnPath === path) {
                            element.addClass('on');
                        } else if (!attrs.exact && path.indexOf(attrs.scOnPath) > -1) {
                            element.addClass('on');
                        } else {
                            element.removeClass('on');
                        }
                    });
                }
            };
        }])

        .directive('scMusicOff', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        if (!sc.bgMusic) {
                            return;
                        }
                        sc.bgMusic.pause();
                    });
                }
            };
        })

        .directive('scMusicOn', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        if (!sc.bgMusic) {
                            return;
                        }
                        sc.bgMusic.play();
                    });
                }
            };
        })

        .directive('hideAt', ['$location', function ($location) {
            return {
                link: function (scope, element, attrs) {
                    var paths = attrs.hideAt.split(',');
                    scope.$on('$routeChangeSuccess', function (event, newRoute, oldRoute) {
                        var path = $location.path();
                        if (paths.indexOf(path) > -1) {
                            element.removeClass('on');
                        } else {
                            element.addClass('on');
                        }
                    });
                }
            };
        }])

        .directive('showAt', ['$location', function ($location) {
            return {
                link: function (scope, element, attrs) {
                    var paths = attrs.showAt.split(',');
                    scope.$on('$routeChangeSuccess', function (event, newRoute, oldRoute) {
                        var path = $location.path();
                        if (paths.indexOf(path) > -1) {
                            element.addClass('on');
                        } else {
                            element.removeClass('on');
                        }
                    });
                }
            };
        }])

        .directive('scroll', function () {
            var settings = {
                scrollbars: 'custom',
                mouseWheel: true,
                click: true,
            };

            return {
                link: function (scope, element, attrs) {
                    var name = '';

                    if (!attrs.scroll) {
                        console.info('scroll没有绑定名称！');
                        name = 'myScroll';
                    } else {
                        name = attrs.scroll;
                    }
                    sc[name] = new IScroll(element[0], settings);

                    setTimeout(function () {
                        sc[name].refresh();
                    }, 200);
                }
            }
        })

        .directive('scrollHorizontal', function () {
            var settings = {
                scrollbars: 'custom',
                scrollX: true,
                scrollY: false,
                mouseWheel: true,
                click: true,
            };

            return {
                link: function (scope, element, attrs) {
                    var name = '';

                    if (!attrs.scrollHorizontal) {
                        console.info('scroll没有绑定名称！');
                        name = 'myScroll';
                    } else {
                        name = attrs.scrollHorizontal;
                    }
                    sc[name] = new IScroll(element[0], settings);

                    setTimeout(function () {
                        sc[name].refresh();
                    }, 200);
                }
            }
        })

        .directive('scrollRefresh', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        setTimeout(function () {
                            sc.myScroll.refresh();
                        }, 200);
                    });
                }
            }
        })

        .directive('disableTouch', function () {
            return {
                link: function (scope, element, attrs) {
                    element.bind('touchmove', function (event) {
                        event.preventDefault();
                    });
                }
            }
        })

        .directive('scFormValidation', function () {
            return {
                link: function (scope, element, attrs) {
                    var defaultMessage = '表单验证未通过。';
                    if (attrs.scFormValidation) {
                        defaultMessage = attrs.scFormValidation;
                    }
                    if (attrs.name) {
                        scope[attrs.name].checkForm = function () {
                            var result = element.find(':input.ng-invalid').eq(0).data('msg');
                            //console.log(result);
                            if (!result && element.find(':input.ng-invalid').length) {
                                result = defaultMessage;
                            }
                            return result;
                        };
                    }
                }
            };
        })

        .directive('areasForm', ['$http', function ($http) {
            return {
                link: function (scope, element) {
                    var provinceIndex, cityIndex;
                    //表单三级联动
                    $.each(province_arr, function (i) {
                        element.find('.province').append('<option value="' + this + '">' + this + '</option>');
                    });
                    element.find('.province').change(function () {
                        $('.dealercode').attr("disabled", true);
                        $('.dealercode')[0].options.length = 1;
                        $('.city')[0].options.length = 0;

                        provinceIndex = _.indexOf(province_arr, $('.province').val());
                        element.find('.city').html('<option value="">请选择城市</option>');
                        $.each(city_arr[provinceIndex], function (i) {
                            element.find('.city').append('<option value="' + this + '">' + this + '</option>');
                        });
                    });
                    element.find('.city').change(function () {
                        $('.dealercode').attr("disabled", true);
                        $('.dealercode')[0].options.length = 1;

                        cityIndex = _.indexOf(city_arr[provinceIndex], $('.city').val());
                        var p = province_arr[provinceIndex];
                        var c = city_arr[provinceIndex][cityIndex];
                        sc.baseUrl = 'http://10.0.0.24:8089/Client%20Projects/Toyota.WeddingExpo2017/src/';
                        var url = sc.baseUrl + 'dealer.php';
                        var data = {
                            'provinceName': p,
                            'cityName': c
                        };

                        $('.dealercode')[0].options.length = 0;
                        element.find('.dealercode').append('<option value="">查询中……</option>');
                        $http.post(url, data).success(function (x) {
                            $('.dealercode')[0].options.length = 0;
                            element.find('.dealercode').append('<option value="">请选择经销商</option>');

                            var dealers = x.data;
                            scope.record.dealer = '';
                            $.each(dealers, function (i) {
                                element.find('.dealercode').append('<option value="' + dealers[i].name + '">' + dealers[i].name + '</option>');
                            });
                            $('.dealercode').attr("disabled", false);
                        });
                    });
                }
            };
        }])

        .directive('dealerForm', ['$http', function ($http) {
            return {
                link: function (scope, element) {
                    var p = _.uniq(_.map(dealer_arr, 'province'));
                    scope.province = p;
                    scope.selectProvince = function (province) {
                        var data = _.filter(dealer_arr, function (i) {
                            return i.province == province;
                        })
                        scope.city = _.uniq(_.map(data, 'city'));
                    };
                    scope.selectCity = function (city) {
                        var data = _.filter(dealer_arr, function (i) {
                            return i.city == city;
                        })
                        scope.dealer = _.uniq(_.map(data, 'dealer'));
                    };

                    scope.plan = plan_arr;
                }
            };
        }])

        .directive('addWord', function () {
            return {
                link: function (scope, element, attrs) {
                    var e = attrs.addWord.split(',');

                    element.find('a').each(function () {
                        $(this).click(function () {
                            var currentText = scope.myForm.comment.$viewValue;
                            var text = (currentText ? currentText + '，' : '') + $(this).html();
                            add(text);
                        });
                    });

                    function add(text) {
                        //console.log(scope.master);
                        scope.$apply(function () {
                            scope[e[0]][e[1]] = text;
                        });
                    }
                }
            }
        })

        .factory('dataService', ['$q', '$wilddogArray', function ($q, $wilddogArray) {
            var ref = new Wilddog("https://seco.wilddogio.com/benz/vclass"),
                awards = [],
                userComments,
                refArea = ref;
            //sc.ref = ref;

            ref.authWithPassword({
                email: 'info@secoinfo.net',
                password: '123'
            }, function (error, data) {
                //console.log('auth result:', error, data);
            });

            if (sc.area) {
                refArea = ref.child(sc.area);
                if (sc.utmSource) {
                    refArea = refArea.child('area/' + sc.utmSource);
                }
                awards = $wilddogArray(refArea.child('awards').orderByChild('odds'));

                awards.$loaded().then(function () {
                    // console.log(awards);
                    if (awards.length == 0) {
                        awards = $wilddogArray(ref.child(sc.area + '/awards').orderByChild('odds'));
                        awards.$loaded().then(function () {
                            // console.log(awards);
                        });
                    }
                });
            }

            function lottery(rnd, time) {
                //console.log(rnd);

                //console.log('loot', rnd);
                for (var i = 0; i < awards.length; i++) {
                    var aw = awards[i],
                        wonCount = refArea.child('awards/' + aw.$id + '/wonCount'),
                        quantity = refArea.child('awards/' + aw.$id + '/quantity'),
                        awtime = refArea.child('awards/' + aw.$id + '/time'),

                        chance = aw.odds * 10000,
                        cooldown = time / 1000 - aw.time / 1000;

                    if (cooldown < aw.threshold || aw.quantity <= 0) {
                        //console.log('奖品冷却器未过或奖品数量为0', aw.name, cooldown);
                        continue;
                    }

                    if (rnd < chance) {
                        quantity.transaction(function (x) { return x - 1; });
                        wonCount.transaction(function (x) { return x + 1; });
                        awtime.set(Wilddog.ServerValue.TIMESTAMP);

                        return aw;
                    }
                }
            }

            userComments = $wilddogArray(ref.child('club').child('records').orderByChild('commentShow').limitToLast(100));

            return {
                add: function (record, callback) {
                    if (!refArea) {
                        alert('请扫描活动二维码参与本次活动。');
                        sc.enablebtn = true;
                        return;
                    }
                    refArea.child('records').orderByChild('tel').equalTo(record.tel + '').limitToFirst(1).once('value', function (ss) {
                        if (ss.val()) {
                            alert('此手机号码已提交过');

                            //提交失败后按钮变为可点击
                            sc.enablebtn = true;
                            return;
                        }

                        //save record
                        sc.userRef = refArea.child('records').push(record, function () {
                            callback();
                        });

                    });
                },
                loot: function (record, callback) {
                    refArea.child('info').update({ time: Wilddog.ServerValue.TIMESTAMP }, function (err) {
                        refArea.child('info').once('value', function (infoss) {
                            //get current server time
                            var time = infoss.val().time;

                            // //抽奖次数消费1次
                            // refArea.child('users/' + record.mobile + '/guess').transaction(function (current_value) {
                            //     return (current_value || 0) - 1;
                            // });

                            //get the lottery!
                            var item = lottery(_.random(0, 10000), time);


                            if (item) {
                                //save record
                                sc.userRef.update({ 'award': item.name, 'awardCode': item.code, 'awardTime': time }, function () {
                                    refArea.child('info/awardCount').transaction(function (current_value) {
                                        return (current_value || 0) + 1;
                                    });
                                    callback(item);
                                });
                            } else {
                                //delete record.award;
                                callback();
                            }
                        });
                    });
                },
                loadUserData: function (cb) {
                    userComments.$loaded(function (data) {
                        cb(data);
                    });
                },
                findTel: function (tel, cb) {
                    var query = refArea.child('records').orderByChild('tel').equalTo(tel + '').limitToFirst(1);
                    query.once('value', function (data) {
                        cb(data.val());
                    });
                }
            };
        }])

        .factory('wpDataService', ['$http', function ($http) {
            var token = '';
            if (/secoinfo/i.test(sc.baseUrl)) {
                token = 'Basic YWRtaW46cE1aayBuOTYwIGJnQ2EgcWpwbiBqSW1mIExQZEs=';
            } else if (/mcon-group.com/i.test(sc.baseUrl)) {
                token = 'Basic YWRtaW46YVgzQiA1TDhCIHQ5VUggVjJwQyBBY1ZsIGpjdnc=';
            } else {
                token = 'Basic YWRtaW46TFJHeiB5b1ZhIGtDTXAgb1pnRCB6NnV3IEJOUm4=';
            }
            var headers = {
                'Authorization': token,
                "content-type": "application/x-www-form-urlencoded",
            };
            return {
                post: function (url, data, cb) {
                    $http.post(url, data, { headers: headers }).then(function (res) {
                        cb(res);
                    });
                }
            }
        }])

        .factory('pjUtils', function () {
            return {
                getDeviceInfo: function () {
                    var deviceInfoArr = [];
                    var ua = navigator.userAgent;
                    if (/iPhone|iPad/i.test(ua))
                        deviceInfoArr.push('苹果');
                    if (/Android/i.test(ua))
                        deviceInfoArr.push('安卓');
                    if (/MicroMessenger/i.test(ua))
                        deviceInfoArr.push('微信');

                    return deviceInfoArr.join('-');
                }
            };
        })

        .filter('mobileMask', function () {
            return function (input) {
                input = input + '';
                return input ? input.substr(0, 3) + '****' + input.substr(7) : '';
            };
        })

        //GA监测代码
        .directive('gaEvent', function () {
            return {
                link: function (scope, element, attrs) {
                    var category = 'precious_moment';
                    element.click(function () {
                        var params = attrs.gaEvent; //.split(',');
                        if (window.ga) {
                            ga('send', 'event', category, params);
                        }
                        if (window.stm_clicki) {
                            stm_clicki('send', 'event', category, params);
                        }
                    });
                }
            };
        })

        .directive('gaPage', function () {
            return {
                link: function (scope, element, attrs) {
                    element.click(function () {
                        var title = $('title').html();
                        var params = attrs.gaPage;
                        if (window.ga) {
                            ga('send', 'pageview', params);
                        }
                        if (window.stm_clicki) {
                            stm_clicki('send', 'pageview', {
                                'page': params,
                                'title': title
                            });
                        }
                    });
                }
            };
        })

        .directive('repeatFinish', function () {
            return {
                link: function (scope, element, attr) {
                    //console.log(scope.$index);
                    if (scope.$last == true) {
                        // console.log('ng-repeat执行完毕');
                        scope.$eval(attr.repeatFinish);
                    }
                }
            }
        })

        .directive('scOnScrollPos', function () {
            return {
                link: function (scope, element, attrs) {
                    $(window).scroll(function () {
                        if (attrs.scOnScrollPos < window.scrollY && !element.hasClass('on')) {
                            scope.$apply(function () {
                                element.addClass('on');
                            });
                        }
                    });
                }
            };
        })

        .directive('pjFrames', ['$rootScope', function ($rootScope) {
            //private members
            var _ctx, _scope, _assets;
            var _curFrame, _remaining, _curTime, _isPlaying, _isReverse, _isSolo, _isSoloReached;

            function init() {
                _curFrame = 0;
                _remaining = 0;
                _curTime = 0;
                _isPlaying = false;
                _isReverse = false;
                _isSolo = false;
                _isSoloReached = false; //only perform a single loop
            }

            function reset() {
                _remaining = 0;
                _curTime = 0;
                _isPlaying = false;
            }

            function next() {
                if (_isSoloReached) {
                    return;
                }

                _isPlaying = true;

                _ctx.drawImage(_assets[_curFrame], 0, 0, _ctx.canvas.width, _ctx.canvas.height);
                _scope.$broadcast('framePainted', _curFrame);

                _isReverse ? _curFrame-- : _curFrame++;

                if ((_curFrame >= _assets.length || _curFrame < 0) && _isSolo) {
                    _isSoloReached = true;
                    reset();
                    _scope.$broadcast('framesSoloReached');
                    return;
                }
                else if (_curFrame >= _assets.length) {
                    _curFrame = 0;
                }
                else if (_curFrame < 0) {
                    _curFrame = _assets.length - 1;
                }

                if (_curTime !== 0) {
                    _remaining -= Date.now() - _curTime;
                }
                if (_remaining <= 0) {
                    reset();
                    return;
                }
                _curTime = Date.now();

                var delay = calcDelay(_remaining); //work out ease stopping effect

                requestAnimFrame(function () {
                    if (!delay) {
                        next();
                    }
                    else {
                        setTimeout(next, delay);
                    }
                });
            }

            function calcDelay(remaining) {
                var delay = (300 - remaining) / 5;
                return delay > 0 ? delay : 0;
            }

            return {
                link: function (scope, element, attrs) {
                    //init directive global variables
                    init();

                    //load assets for frames
                    _assets = $rootScope.assets[attrs.pjFrames];

                    //assign current scope for event handlers etc.
                    _scope = scope;

                    _isSoloReached = false;

                    if (attrs.pjFramesSolo) {
                        _isSolo = true;
                    }

                    var total = 0,
                        isTotalReached = false;

                    var canvas = element[0];
                    canvas.height = element.height();
                    canvas.width = element.width();
                    _ctx = canvas.getContext('2d');

                    //time is ms
                    scope.playFrames = function (time) {
                        total += Math.abs(time);
                        _remaining = Math.abs(time);
                        _isReverse = time < 0;

                        if (!_isPlaying) {
                            next();
                        }

                        if (total > attrs.pjFramesTotal && !isTotalReached) {
                            isTotalReached = true;
                            scope.$broadcast('framesTotalReached');
                        }
                    };
                }
            };
        }])
    
        .directive('playBgFrame', function () {
            var _col = 0, _row = 0, x, y, el, row, col, width, height;
            var scale;
            var windowW = $(window).width();
            var windowH = $(window).height();
            var windowAspect = windowW / windowH;
            var aspectRatio = 1334 / 698;
            
            function playBg() {
                if (_row < row) {
                    if (_col < col) {
                        x = -width * _col;
                        y = -height * _row;
                        _col++;
                    } else {
                        _col = 0;
                        _row++;
                    }
                } else {
                    _row = 0;
                    _col = 0;
                }
                el.css({
                    'backgroundPosition': x + 'px ' + y + 'px',
                });
            };
            function size(windowAspect) {
                var s;
                if (windowAspect > aspectRatio) {
                    s = windowW / 1334;
                } else {
                    s = windowH / 698;
                }
                el.css({
                    'transform': 'scale(' + s + ')',
                });
            };
            return {
                link: function (scope, element, attrs) {
                    var params = attrs.playBgFrame.split(',');
                    el = element, row = params[0], col = params[1], width = params[2], height = params[3];
                    size(windowAspect);
                    window.addEventListener('resize', function () {
                        windowW = $(window).width();
                        windowAspect = windowW / windowH;
                        windowH = $(window).height();
                        size(windowAspect);
                    });
                    window.addEventListener('orientationchange', function () {
                        windowW = $(window).width();
                        windowAspect = windowW / windowH;
                        windowH = $(window).height();
                        windowAspect = windowW / windowH;
                        size(windowAspect);
                    });
                    setInterval(function () {
                        playBg();
                    }, params[4]);
                }
            };
        })
    
        .directive('scResize', function () {
            var aspectRatio = 750 / 1270; //deafult aspect
            return {
                restrict: 'AC',
                link: function (scope, element, attrs) {
                    if (attrs.scResize) {
                        aspectRatio = parseFloat(attrs.scResize);
                    }
                    element.scWinSize({
                        aspectRatio: aspectRatio
                    });
                    $(window).resize(function () {
                        element.scWinSize({
                            aspectRatio: aspectRatio
                        });
                    });
                    window.addEventListener('orientationchange', function () {
                        setTimeout(function() {
                            element.scWinSize({
                                aspectRatio: aspectRatio
                            });
                            console.log('resize!');
                        }, 500);
                    });
                }
            };
        })
})();
