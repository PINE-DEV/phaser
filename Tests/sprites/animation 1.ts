/// <reference path="../../Phaser/Game.ts" />
/// <reference path="../../Phaser/Sprite.ts" />

(function () {

    var myGame = new Game(this, 'game', 800, 600, init, create, update);

    function init() {

        myGame.loader.addSpriteSheet('mummy', 'assets/sprites/metalslug_mummy37x45.png', 37, 45, 18);
        //myGame.loader.addSpriteSheet('coin', 'assets/sprites/coin.png', 32, 32);
        myGame.loader.addSpriteSheet('monster', 'assets/sprites/metalslug_monster39x40.png', 39, 40);

        myGame.loader.load();

    }

    var car: Sprite;

    function create() {

        car = myGame.createSprite(200, 300, 'monster');

        car.animations.add('spin', null, 30, true);

        //car.animations.play('spin', 30, true);
        car.animations.play('spin');

    }

    function update() {

        car.renderDebugInfo(16, 16);

        car.velocity.x = 0;
        car.velocity.y = 0;
		car.angularVelocity = 0;
		car.angularAcceleration = 0;

        if (myGame.input.keyboard.isDown(Keyboard.LEFT))
        {
            car.angularVelocity = -200;
        }
        else if (myGame.input.keyboard.isDown(Keyboard.RIGHT))
        {
            car.angularVelocity = 200;
        }

        if (myGame.input.keyboard.isDown(Keyboard.UP))
        {
            car.velocity.copyFrom(myGame.math.velocityFromAngle(car.angle, 200));
        }

    }

})();
