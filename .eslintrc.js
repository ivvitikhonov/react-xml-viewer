require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es2020": true
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "react-hooks",
        "@typescript-eslint"
    ],
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "quotes": ["warn", "double", { "avoidEscape": true }],
        "max-len": ["error", 160],
        "eol-last": ["warn", "always"],
        "keyword-spacing": ["warn"],
        "comma-dangle": ["warn", "never"],
        "no-trailing-spaces": ["warn", { "ignoreComments": true, "skipBlankLines": true }],
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1 }],
        "no-var": "error",
        "prefer-const": "error",
        "semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
        "object-curly-spacing": ["warn", "always"],
        "array-bracket-spacing": ["warn", "never"],
        "no-console": "warn",
        "react/no-children-prop": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/no-unescaped-entities": "off",
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-no-target-blank": "off",
        "react/no-find-dom-node": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "react/no-string-refs": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-object-literal-type-assertion": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
