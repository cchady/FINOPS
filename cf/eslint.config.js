
const cds = require('@sap/eslint-plugin-cds')

module.exports = [
  cds.configs.recommended,
  {
    plugins: {
      "@sap/cds": cds
    },
    "files": [
      ...cds.configs.recommended.files
    ],
    "rules": {
      ...cds.configs.recommended.rules,
      // Disable i18n rules: labels are intentionally hardcoded in English
      "@sap/cds/no-hardcoded-labels": "off"
    }
  }
]
