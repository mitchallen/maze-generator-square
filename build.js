const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/maze-generator-square.js',
  format: 'cjs',
  platform: 'node',
  target: ['es2015'],
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
