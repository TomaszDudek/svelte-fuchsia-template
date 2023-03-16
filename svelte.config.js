import preprocess from 'svelte-preprocess';

const config = {
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/styles/variables.scss" as *;',
      },
    }),
  ],
};

export default config;
