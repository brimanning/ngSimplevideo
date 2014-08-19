About ngSimplevideo
===

ngSimplevideo is an angularjs implementation of simplevideo.

Quick Start
===
+ Download from above
+ Clone: `git clone https://github.com/brimanning/ngsimplevideo.git`
+ Coming: `bower install ngsimplevideo`

Dependencies
===
+ [jQuery](http://jquery.com)
+ [swfobject](https://code.google.com/p/swfobject)
+ [angularjs](https://angularjs.org/)
+ [simplevideo](https://github.com/brimanning/simplevideo)

Usage
===
ngSimplevideo provides a directive that will convert a simplevideo element or element with a simplevideo attribute into a video element or Flash fallback where required.

You'll need to reference jQuery, simplevideo, angular, and ngSimplevideo on your page:

	<head>
		<script src="jquery.js"></script>
		<script src="simplevideo.js"></script>
		<script src="angular.js"></script>
		<script src="ng-simplevideo.js"></script>
	</head>

You'll now be able to add simplevideo elements on the page normally and ngSimplevideo will populate them with a simplevideo element.

	<simplevideo src="mgVideoPath.mp4"></simplevideo>
	
You can also control the video player itself and listen to it's properties using the following method:


	<simplevideo
		src="videoSrc"
		control-object="controlObject"
		>
	</simplevideo>

	<button ng-click="controlObject.play()">Play</button>
	<button ng-click="controlObject.pause()">Pause</button>
	<button ng-click="controlObject.setCurrentTime(5)">Go Five Seconds In</button>
	<button ng-click="controlObject.setVolume(0)">Mute</button>
	<button ng-click="controlObject.setVolume(1)">Unmute</button>

	Is paused: {{ controlObject.isPaused() }}
	
	<script>
		angular.module('ngSimpleVideo').controller('SampleController',
			['$scope',
			function($scope) {
				$scope.videoSrc = 'bower_components/simplevideo/color-run.mp4';
				$scope.controlObject = {};
			}
		]);
	</script>
	
The attributes you can specify for a simplevideo object are:

+ `src` - _default: none_, the video element url (will use a source specified in the HTML if omitted, otherwise simplevideo will use this value)
+ `autoplay` - _default: false_, if the video should start playing once it's loaded (will use the value specified in the HTML if omitted, otherwise simplevideo will use this value)
+ `poster` - _default: none_, what image the video should show before it's started playing (note: no poster is available if the browser falls back to Flash) (will use the value specified in the HTML if omitted, otherwise simplevideo will use this value)
+ `controls` - _default: false_, if the browser's default controls should be displayed (note: no controls are available if the browser falls back to Flash) (will use the value specified in the HTML if omitted, otherwise simplevideo will use this value)
+ `loop` - _default: false_, if the video should restart playing once it's finished (will use the value specified in the HTML if omitted, otherwise simplevideo will use this value)
+ `on-play` - _default: none_, a function executed when the video starts playing
+ `on-pause` - _default: none_, a function executed when the video is paused
+ `on-ended` - _default: reset current time to 0_, a function executed when the video ends
+ `on-playing` - _default: none_, a function executed while the video is playing
+ `on-playing-interval` - _default: 30_, how many milliseconds between each execution of `onPlaying`
+ `swfobject-url` - _default: 'swfobject.js'_, where the swfobject library should be loaded from (only loaded when necessary)
+ `swf-url` - _default: 'simplevideo.swf'_, where the simplevideo Flash fallback should be loaded from
+ `player-product-install-swf-url` - _default: 'playerProductInstall.swf'_, where the update Flash swf should be loaded from

In addition, there are a few methods you can access via the externalControls object mentioned above:

+ `getCurrentTime()` - returns the current time of the video in seconds
+ `setCurrentTime(secondsOrPercentage)` - sets the current time of the video in seconds or a percent in the form of a string `'50%'` to go halfway through a video
+ `getDuration()` - returns the duration of the video in seconds
+ `getVolume()` - returns the volume of the video element
+ `setVolume(zeroToOneOrPercentage)` - sets the volume of the video element from 0 to 1 or a percent in the form of a string `'50%'` to put the volume halfway up
+ `play()` - play the video from it's current location (triggers the `onPlay` callback)
+ `pause()` - pause the video (triggers the `onPause` callback)

Creator
===
Brian Manning

+ [http://github.com/brimanning](http://github.com/brimanning)
+ [http://brimanning.com](http://brimanning.com)
+ [http://twitter.com/brimanning](http://twitter.com/brimanning)

License
===
Code and documentation copyright 2014 Brian Manning. Code released under the MIT license.