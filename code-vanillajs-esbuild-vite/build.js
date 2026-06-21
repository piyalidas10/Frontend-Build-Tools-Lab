const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/main.js'],

    bundle: true,

    minify: true,

    sourcemap: true,

    outdir: 'dist',

    target: ['es2022'],

    splitting: true,

    format: 'esm'
})
    .then(() => {
        console.log('Build Complete');
    })
    .catch(() => process.exit(1));