ig.module('game.main')
.requires('impact.game')
.defines(function() {

	MyGame = ig.Game.extend({
		audio1: new ig.Sound('media/audio1.ogg'),
		audio2: new ig.Sound('media/audio2.ogg'),
		audio3: new ig.Sound('media/audio3.ogg')
	});

	ig.main('#canvas', MyGame, 60, 640, 64, 1);
});