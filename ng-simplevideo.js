(function(window, angular, undefined) {
  'use strict';

  angular.module('ngSimpleVideo', ['ng']).directive('simplevideo', function() {
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
        simplevideoId: '=?'
      },
      link: function(scope, element, attrs) {
        if (typeof scope.simplevideoId === 'undefined' || !scope.simplevideoId) {
          scope.simplevideoId = 'simplevideo'
        }

        var opts = scope
        opts.target = element

        simplevideo.init(opts);
      }
    };
  });
})(window, window.angular);
