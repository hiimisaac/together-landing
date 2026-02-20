import adapter from '@sveltejs/adapter-static';

const isProd = process.env.NODE_ENV === 'production';
const base = isProd ? process.env.BASE_PATH ?? '' : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build'
    }),
    paths: {
      base
    },
    prerender: {
      entries: ['*']
    }
  }
};

export default config;
