import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $components: path.resolve('src/lib/components'),
      $lib: path.resolve('src/lib')
    }
  }
};

export default config;
