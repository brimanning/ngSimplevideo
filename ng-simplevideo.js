/*
 * simplevideo Angular Directive JavaScript Library v0.1.4
 * https://github.com/brimanning/ngSimplevideo
 *
 * Uses jQuery.js
 * http://jquery.com/
 *
 * Uses swfobject.js
 * https://code.google.com/p/swfobject
 *
 * Uses simplevideo.js
 * https://github.com/brimanning/simplevideo
 *
 * Copyright 2014 Brian Manning
 * Released under the MIT license
 *
 * Date: 9/16/2014
 */

(function(window, angular, undefined) {
  'use strict';

  angular.module('ngSimplevideo', []).directive('simplevideo', function() {
    return {
      restrict: 'AE',
      template: '<div class="simplevideo"></div>',
      replace: true,
      scope: {
        src: '=',
        autoplay: '=?',
        poster: '=?',
        controls: '=?',
        loop: '=?',
        onPlay: '&',
        onPause: '&',
        onEnded: '&',
        onPlaying: '&',
        onPlayingInterval: '=?',
        swfobjectUrl: '=?',
        swfUrl: '=?',
        playerProductInstallSwfUrl: '=?',
        simplevideoId: '=?',
        controlObject: '=?'
      },
      link: function(scope, element, attrs) {
        if (typeof scope.simplevideoId === 'undefined' || !scope.simplevideoId) {
          scope.simplevideoId = 'simplevideo'
        }

        var opts = scope;
        opts.target = element;

        var video = simplevideo.init(opts);

        scope.externalControls = scope.controlObject || {};
        scope.externalControls.play = video.play;
        scope.externalControls.pause = video.pause;
        scope.externalControls.getCurrentTime = video.getCurrentTime;
        scope.externalControls.setCurrentTime = video.setCurrentTime;
        scope.externalControls.getDuration = video.getDuration;
        scope.externalControls.getVolume = video.getVolume;
        scope.externalControls.setVolume = video.setVolume;
        scope.externalControls.isPaused = function() {
          return video.paused;
        };
      }
    };
  });
})(window, window.angular);
