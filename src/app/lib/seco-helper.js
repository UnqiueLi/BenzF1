var sc = sc || {};
sc.isAndroid = /android/i.test(navigator.userAgent);
sc.imageUrl = 'assets/images/';

//support libraries
(function ($) {
    $.fn.scWinSize = function (options) {
        var settings = $.extend({
            //target width /height
            aspectRatio: 16 / 9
        }, options);

        var windowW = $(window).width();
        var windowH = $(window).height();
        var windowAspect = windowW / windowH;

        return this.each(function () {
            $(this).removeAttr('style');
            if (windowAspect < settings.aspectRatio) {
                $(this).css({
                    "height": "100%",
                    "width": parseInt(windowH * settings.aspectRatio) + "px",
                    "margin-left": parseInt((windowH * settings.aspectRatio - windowW) / -2) + "px"
                });
            }
            else {
                $(this).css({
                    "height": parseInt(windowW / settings.aspectRatio) + "px",
                    "width": "100%",
                    "margin-top": parseInt((windowW / settings.aspectRatio - windowH) / -2) + "px"
                });
            }
        });
    };
})(jQuery);

/*
 * Array extention method for element removing.
 */
Array.prototype.remove = function () {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * If there is no indexOf func (for IE8), create it manually.
 */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/) {
        var len = this.length >>> 0;
        var from = Number(arguments[1]) || 0;
        from = (from < 0) ?
            Math.ceil(from) :
            Math.floor(from);
        if (from < 0)
            from += len;
        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

/*
 * jQuery plugin for detecting position in a relative manor
 */
(function ($) {
    $.fn.offsetRelative = function (top) {
        var $this = $(this);
        var $parent = $this.offsetParent();
        var offset = $this.position();
        if (!top) return offset; // Didn't pass a 'top' element 
        else if ($parent.get(0).tagName == "BODY") return offset; // Reached top of document
        else if ($(top, $parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to 
        else if ($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to 
        else { // Get parent's relative offset
            var parent_offset = $parent.offsetRelative(top);
            offset.top += parent_offset.top;
            offset.left += parent_offset.left;
            return offset;
        }
    };
    $.fn.positionRelative = function (top) {
        return $(this).offsetRelative(top);
    };
}(jQuery));

//序列文件补位
function frameName00(i) {
    if (i < 10) {
        i = '00' + i;
    } else if (i < 100) {
        i = '0' + i
    } else {
        i = i.toString();
    }
    return i;
};

//通过url创建一组图片序列
/**
 * 
 * @param {type} name 素材名
 * @param {type} imageUrl 图片地址
 * @param {type} imageType 图片格式
 * @param {type} imageQuantity 数量 
 * @param {type} frameExtraction 跳帧
 * @returns {type} 
 */
function createImagesArray(name, imageUrl, imageType, imageQuantity, frameExtraction, start) {
    var imagesArray = [],
        x = start || 1;
    imagesArray.load = false;
    for (var i = x; i < imageQuantity + 1; i++) {
        if (frameExtraction) {
            i += frameExtraction;
            if (i > imageQuantity) {
                i = imageQuantity;
            }
        }
        var num = frameName00(i);
        var assets = {
            name: name + [i],
            url: imageUrl + num + '.' + imageType
        };
        imagesArray.push(assets);
    }
    return imagesArray;
};

//通过图片序列创建MovieClip序列帧
function createMovieClip(imagesUrl, yoyo) {
    var images = [];
    var reverse = [];
    var mc;
    for (var i = 0; i < imagesUrl.length; i++) {
        var texture = PIXI.Texture.fromImage(imagesUrl[i].url);
        images.push(texture);
        reverse.push(texture);
    }
    if (yoyo) {
        reverse.shift();
        reverse.pop();
        reverse.reverse();
        images = images.concat(reverse);
    }
    mc = new PIXI.extras.AnimatedSprite(images);
    return mc;
};

/**
 * 加载序列帧图片素材
 * @param {type} target pixi的Loader对象
 * @param {Array} imagesArray 需要加载的图片数组
 * @param {function} endFunc 加载完成后执行函数
 */
function frameLoad(target, imagesArray, endFunc) {
    if (!target.loaded) {
        target.add(imagesArray).load(endFunc);
        target.loaded = true;
    } else {
        endFunc();
    }
};


/**
 * 播放序列帧图片
 * @param {object} mc
 * @param {number} speed 默认值为1
 * @param {boolean} loop
 */
function playCanvas(mc, speed, loop, func) {
    mc.animationSpeed = speed || 1;
    mc.play();

    if (!loop) {
        mc.loop = false;
        mc.play();

        var interval = setInterval(function () {
            if (!mc.playing) {
                if (func) {
                    func();
                }
                clearInterval(interval);
            }
        }, 20);
    } else {
        if (func) {
            func();
        }
    }
};

/**
 * 视频播放定时事件，依赖jquery
 * @param {String} target	jq对象
 * @param {Number} time	    触发时间
 * @param {Function} func	触发事件
 * 
 * 
 */
function playVideoTimeEvent(target, time, func) {
    var video = $(target)[0];
    if (time == 0) {
        $(target).on('ended', function () {
            func();
        });
    } else {
        $(target).on('timeupdate', function () {
            if (video.currentTime > time) {
                func();
            }
        });
    }
};

function androidMusicPlay() {
    if (sc.isAndroid) {
        sc.audioBtn.find('audio')[0].play();
    }
};


/**
 * 声音
 * @param {String} url	链接
 * @param {Boolean} autoPlay	自动播放
 * @param {Boolean} loop	循环
 * @param {Function} onPlay	当播放时
 * @param {Function} onPause	当暂停时
 * @param {Function} onEnded	当结束时
 * 
 * 
 */
function lAudio(url, autoPlay, loop, onPlay, onPause, onEnded) {
    var audio = document.createElement("audio")
    audio.src = url;
    audio.loop = false;

    audio.autoplay = autoPlay
    if (onPlay != undefined) audio.addEventListener("play", onPlay)
    if (onPause != undefined) audio.addEventListener("pause", onPause)
    audio.addEventListener("ended", function () {
        if (onEnded != undefined) onEnded()

        if (loop) {
            audio.play()
        }
    })

    audio.restart = function () {
        audio.currentTime = 0
        audio.play()
    }

    /*
	audio.originalPlay = audio.play
	
	audio.play =function  () 
	{
		$(audio).unbind("play",loadPlay)
		audio.originalPlay()
	}
	
	//调用play来实现加载
	audio.startLoad =function  () 
	{
		$(audio).bind("play",loadPlay)
		audio.originalPlay()
		
	}
	function loadPlay () 
	{
		audio.pause()
	}*/

    return audio
}


// 图片URL路径补位
function image(n) {
    return sc.imageUrl + n;
};

// 转化数字千分符
function numToMil(num) {
    return (num.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
}

// 获取URL参数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function minData(data, type, min) {
    if (!min) min = 20;
    if (type) data = data * Math.random() * 10;
    if (data < min) data = min;
    if (data > 100) data = 100;

    return data;
};

function gaEvent(params, label) {
    var category = 'precious_moment';
    label = label || '';
    if (window.ga) {
        ga('send', 'event', category, params, label);
    }
    if (window.stm_clicki) {
        stm_clicki('send', 'event', category, params, label);
    }
};

function gaPage(curPath) {
    //如果整合了GA检测，则推送pageview事件
    if (window.ga) {
        ga('send', 'pageview', curPath);
    }
    if (window.stm_clicki) {
        stm_clicki('send', 'pageview', curPath);
    }
};


function createVideoEl(url, onEnded, onPlay, onPause) {
    var video = document.createElement("video");

    video.src = url;
    video.preload = 'auto';
    // video.setAttribute('x5-video-orientation', 'landscape|portrait');
    // video.setAttribute('x5-video-orientation', 'landscape');
    video.setAttribute('x5-video-orientation', 'portrait');
    video.setAttribute('x5-video-player-type', 'h5');
    video.setAttribute('x5-video-player-fullscreen', 'true');
    video.setAttribute('playsinline', 'true');
    video.setAttribute('style', 'object-fit:fill');

    if (onPlay != undefined) video.addEventListener("play", onPlay);
    if (onPause != undefined) video.addEventListener("pause", onPause);
    video.addEventListener("ended", function () {
        if (onEnded != undefined) onEnded()
    });

    video.load();
    return video
};

function createPlayVideo(url, cb, time) {
    var div = document.createElement('div');
    var video = createVideoEl(url, end);
    $(div).addClass('video-box play-video');
    $(video).appendTo(div);
    $(div).appendTo('body');

    video.play();
    if (time) {
        setTimeout(function () {
            video.currentTime = time;
        }, 1000);
    }
    $(div).addClass('on');

    function end() {
        $(div).css('z-index', 'auto');
        setTimeout(function () {
            $(div).remove();
        }, 500);
        cb();
    };
};

function createPlayVideo2(boxEl, url, onEnd, inPlaying, time) {
    var box = $(boxEl)[0];
    var div = document.createElement('div');
    var video = createVideoEl(url, end, onPlay);
    $(video).appendTo(div);
    $(div).appendTo(box);

    video.addEventListener("timeupdate", function () {
        if (video.currentTime > time) {
            inPlaying();
        }
    });

    video.style["object-position"] = "0px 60px"

    window.onresize = function () {
        video.style.width = $(boxEl).width() + "px";
        video.style.height = $(boxEl).height() + "px";
    }
    
    function onPlay() {
        $(video).fadeIn(0);
        $(div).addClass('on');
        setTimeout(function() {
            $(boxEl).addClass('on');
        }, 300);
    };

    function end() {
        // video.currentTime = 0;
        $(boxEl).removeClass('on');
        setTimeout(function () {
            $(div).removeClass('on');
        }, 1000);
        onEnd();
    };

    return video;
};

// 创建img
function preImage(url, callback) {
    var img = new Image(); //创建一个Image对象，实现图片的预下载  
    img.src = url;

    if (img.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数  
        callback.call(img);
        return; // 直接返回，不用再处理onload事件  
    }

    img.onload = function () { //图片下载完毕时异步调用callback函数。  
        callback.call(img);//将回调函数的this替换为Image对象  
    };
} 


//dataURL 转 file
function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    
    while (n--) u8arr[n] = bstr.charCodeAt(n);
    return new File([u8arr], filename, { type: mime });
}