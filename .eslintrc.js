module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/standard"],
  globals: {
    AMap: "true",
    AMapUI:"true",
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "generator-star-spacing": "off",
    "camelcase": ["error", {"allow": ["aa_bb"]}],
    "no-mixed-operators": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 2,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-tabs": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      "never",
      {
        beforeStatementContinuationChars: "never"
      }
    ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    "space-before-function-paren": 0,
    // TODO: Remove when is https://github.com/babel/babel-eslint/issues/530 fixed
    "template-curly-spacing": "off",
    indent : "off"
  }
};
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/strongly-recommended", "@vue/standard"],
  globals: {
    AMap: "true",
    AMapUI:"true",
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "generator-star-spacing": "off",
    "no-mixed-operators": 0,
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    "vue/attribute-hyphenation": 0,
    "vue/html-self-closing": 0,
    "vue/component-name-in-template-casing": 0,
    "vue/html-closing-bracket-spacing": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/no-unused-components": 0,
    "vue/multiline-html-element-content-newline": 0,
    "vue/no-use-v-if-with-v-for": 2,
    "vue/html-closing-bracket-newline": 0,
    "vue/no-parsing-error": 0,
    "no-tabs": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      "never",
      {
        beforeStatementContinuationChars: "never"
      }
    ],
    "no-delete-var": 2,
    "prefer-const": [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    "space-before-function-paren": 0,
    // TODO: Remove when is https://github.com/babel/babel-eslint/issues/530 fixed
    "template-curly-spacing": "off",
    indent: "off",
    "import/no-duplicates": "off"
  }
};
