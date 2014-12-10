/*
 *  jquery.anim
 *  author: IWABUCHI Yu(u)ki
 *
 *
 *              提             供             
 *
 *  ██╗  ██╗ █████╗ ██╗   ██╗ █████╗  ██████╗
 *  ██║ ██╔╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔════╝
 *  █████╔╝ ███████║ ╚████╔╝ ███████║██║     
 *  ██╔═██╗ ██╔══██║  ╚██╔╝  ██╔══██║██║     
 *  ██║  ██╗██║  ██║   ██║   ██║  ██║╚██████╗
 *  ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝
 *
 *  現在カヤックではイースターエッグエンジニア（隠しネタ職人）を募集中です。
 *  http://www.kayac.com/recruit/career/
 *
 */

;(function($) {
    'use strict';

    // ToDo: setInterval like arguments
    /**
     *  option.duration
     *  option.step {function} callback called for every speps
     *  option.complete {function} complete animation callback
     */
    $.fn.anim = function(option) {
        var opts = $.extend({}, $.fn.anim.defaults, option);

        var $this = $(this);

        $({_t: 0}).animate({
            _t: 1
        }, {
            duration: option.duration,
            easing: option.easing,
            step: function(t) {
                if(typeof option.step === 'function') {
                    option.step.call($this, t);
                }
            },
            complete: function() {
                if(typeof option.step === 'function') {
                    option.step.call($this, 1);
                }
                if(typeof option.complete === 'function') {
                    option.complete.call($this);
                }
            }
        });

        return this;
    };

    $.fn.anim.defaults = {
        duration: 1000
    };

}(jQuery));
