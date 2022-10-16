const postcssPresetEnv = require('postcss-preset-env');
const postcssAutoPrefixer = require('autoprefixer');

module.exports = {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            features: {
                'nesting-rules': true
            },
        }),
        postcssAutoPrefixer(),
    ]
}