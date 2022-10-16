import sveltePreprocess from 'svelte-preprocess';

export default {
    preprocess: [
        sveltePreprocess({
            less: true,
            sass: { renderSync: true },
            scss: { renderSync: true },
            stylus: true,
            typescript: true,
        })
    ]
}