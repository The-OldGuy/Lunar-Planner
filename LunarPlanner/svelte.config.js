import adapter from '@sveltejs/adapter-auto';
import { preprocess } from '@sveltejs/kit';

const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter()
  }
};

export default config;
