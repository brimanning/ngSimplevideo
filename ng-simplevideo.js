(function(window, angular, undefined) {
  'use strict';

  angular.module('ngSimpleVideo', []).directive('simplevideo', function() {
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
