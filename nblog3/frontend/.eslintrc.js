// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
        "es6": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'vue/multi-word-component-names': 'off',
    }
};
