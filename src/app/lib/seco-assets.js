var sc = sc || {};

sc.particlesystem = {
    title: 'Particle System',
    default: {
        enabled: true,
        autoPlay: false,
        numParticles: 20,
        lifetime: 2,
        rate: 0.1,
        rate2: 0.1,
        startAngle: 0,
        startAngle2: 0,
        loop: true,
        preWarm: false,
        lighting: false,
        halfLambert: false,
        intensity: 1,
        depthWrite: false,
        depthSoftening: 0,
        sort: 0,
        blendType: 2,
        stretch: 0,
        alignToMotion: false,
        emitterShape: 0,
        emitterExtents: [15, 10, 10],
        emitterRadius: 0,
        initialVelocity: 0,
        animTilesX: 1,
        animTilesY: 1,
        animNumFrames: 1,
        animSpeed: 1,
        animLoop: true,
        wrap: false,
        wrapBounds: [0, 0, 0],
        colorMapAsset: null,
        normalMapAsset: null,
        mesh: null,
        localVelocityGraph: {
            type: 1,
            keys: [
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            betweenCurves: false
        },
        localVelocityGraph2: {
            type: 1,
            keys: [
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        },
        velocityGraph: {
            type: 1,
            keys: [
                [0, 0],
                [0, 0],
                [0, 0]
            ],
            betweenCurves: true
        },
        velocityGraph2: {
            type: 1,
            keys: [
                [0, 0],
                [0, 0],
                [0, 0]
            ]
        },
        rotationSpeedGraph: {
            type: 1,
            keys: [0, 0],
            betweenCurves: false
        },
        rotationSpeedGraph2: {
            type: 1,
            keys: [0, 0]
        },
        scaleGraph: {
            type: 1,
            keys: [0, 0, 0.5, 0.3, 1, 0],
            betweenCurves: false
        },
        scaleGraph2: {
            type: 1,
            keys: [0, 0]
        },
        colorGraph: {
            type: 1,
            keys: [
                [0, 1],
                [0, 1],
                [0, 1]
            ],
            betweenCurves: false
        },
        alphaGraph: {
            type: 1,
            keys: [0, 0, 0.5, 1, 0.9, 0],
            betweenCurves: false
        },
        alphaGraph2: {
            type: 1,
            keys: [0, 1]
        }
    },
    types: {
        emitterExtents: 'vec3',
        localVelocityGraph: 'curveset',
        localVelocityGraph2: 'curveset',
        velocityGraph: 'curveset',
        velocityGraph2: 'curveset',
        rotationSpeedGraph: 'curve',
        rotationSpeedGraph2: 'curve',
        scaleGraph: 'curve',
        scaleGraph2: 'curve',
        colorGraph: 'curveset',
        alphaGraph: 'curve',
        alphaGraph2: 'curve'
    }
};