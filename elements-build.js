const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/questionnaire/runtime-es2015.js',
        './dist/questionnaire/polyfills-es2015.js',
        './dist/questionnaire/scripts.js',
        './dist/questionnaire/main-es2015.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/custom-element-bundle.js');
    await fs.copyFile('./dist/questionnaire/styles.css', 'elements/styles.css')
    
})()