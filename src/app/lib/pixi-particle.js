function particle(renderer, imagePaths, config, type, useParticleContainer) {

    var stage = new PIXI.Container(),
        emitter = null;

    // Calculate the current time
    var elapsed = Date.now();

    var updateId;

    // Update function every frame
    var update = function () {

        // Update the next frame
        updateId = requestAnimationFrame(update);

        var now = Date.now();
        if (emitter)
            emitter.update((now - elapsed) * 0.001);
        elapsed = now;

        // render the stage
        renderer.render(stage);
    };

    // Preload the particle images and create PIXI textures from it
    var urls, makeTextures = false;
    if (imagePaths.spritesheet)
        urls = [imagePaths.spritesheet];
    else if (imagePaths.textures)
        urls = imagePaths.textures.slice();
    else {
        urls = imagePaths.slice();
        makeTextures = true;
    }
    var loader = PIXI.loader;
    loader.reset();
    for (var i = 0; i < urls.length; ++i)
        loader.add("img" + i, urls[i]);

    return new Promise(function (resolve, reject) {
        loader.load(function () {
            //collect the textures, now that they are all loaded
            var art;
            if (makeTextures) {
                art = [];
                for (var i = 0; i < imagePaths.length; ++i)
                    art.push(PIXI.Texture.fromImage(imagePaths[i]));
            } else
                art = imagePaths.art;
            // Create the new emitter and attach it to the stage
            var emitterContainer;
            if (useParticleContainer) {
                emitterContainer = new PIXI.ParticleContainer();
                emitterContainer.setProperties({
                    scale: true,
                    position: true,
                    rotation: true,
                    uvs: true,
                    alpha: true
                });
            } else
                emitterContainer = new PIXI.Container();

            stage.addChild(emitterContainer);
            emitter = new PIXI.particles.Emitter(
                emitterContainer,
                art,
                config
            );
            if (type == "path")
                emitter.particleConstructor = PIXI.particles.PathParticle;
            else if (type == "anim")
                emitter.particleConstructor = PIXI.particles.AnimatedParticle;

            // Center on the stage
            emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
            emitter.emit = false;


            // Start the update
            update();

            //for testing and debugging
            window.destroyEmitter = function () {
                emitter.destroy();
                emitter = null;
                window.destroyEmitter = null;
                //cancelAnimationFrame(updateId);

                //reset SpriteRenderer's batching to fully release particles for GC
                if (renderer.plugins && renderer.plugins.sprite && renderer.plugins.sprite.sprites)
                    renderer.plugins.sprite.sprites.length = 0;

                renderer.render(stage);
            };

            resolve(emitter);
        });
    });

};