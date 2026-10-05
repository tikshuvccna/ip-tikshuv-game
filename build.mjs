import { build, context } from 'esbuild';
const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !process.argv.includes('--dev'),
  sourcemap: process.argv.includes('--dev'),
  format: 'iife',
  target: 'es2020',
  outfile: 'dist/game.js',
  logLevel: 'info',
};
if (process.argv.includes('--watch')) {
  const ctx = await context(opts);
  await ctx.watch();
} else {
  await build(opts);
}
