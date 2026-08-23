import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: path.resolve('src/lib/components'),
      $utils: path.resolve('src/lib/utils'),
      $lib: path.resolve('src/lib')
    }
  }
};

export default config;

