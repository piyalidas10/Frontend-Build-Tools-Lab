const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

async function build() {
  try {
    await esbuild.build({
      entryPoints: ['src/main.js'],
      bundle: true,
      minify: true,
      sourcemap: true,
      outdir: 'dist',
      target: ['es2022'],
      splitting: true,
      format: 'esm',
      loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file'
      }
    });

    // Copy index.html
    fs.copyFileSync(
      path.resolve(__dirname, 'index.html'),
      path.resolve(__dirname, 'dist/index.html')
    );

    console.log('✅ Build Complete');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

build();