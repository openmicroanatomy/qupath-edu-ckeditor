# CKEditor for QuPath

## Building

1. `npm install`
2. `yarn run build`

Your `ckeditor.js` will be at `build/ckeditor.js`.

## CSS

1. `npm install --save mini-css-extract-plugin css-loader`

Your `styles.css` will be at `build/styles.css`

## Add new plugin

1. Add to `package.json` under `dependencies` if necessary
2. Add to `src/ckeditor.js` 
3. Run **Building** and **CSS** commands
- Make any additional changes (e.g. to `ckeditor.html` in `qupath-edu-extension`)
