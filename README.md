# CKEditor for QuPath Edu

WYSIWYG editor used by QuPath Edu.

## Building

1. `npm install`
2. `npm run build`

Built CKEditor will be available at `dist/ckeditor.umd.cjs`, which can be copied over to `src/main/resources/ckeditor/ckeditor.js` in `qupath-edu-extension`.

## CSS

Exported `dist/ckeditor.css` includes both content and editor styling. Content must be contained in a `.ck-content` class for the styles to apply. More info available at: https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/content-styles.html#the-full-list-of-content-styles.

## Add new plugin

1. Add plugin to `package.json` under `dependencies` if necessary
2. Add plugin to `src/ckeditor.js` under `builtinPlugins`
3. Run **Building** commands

Remember to make any additional changes to `src/main/resources/html/ckeditor.html` in `qupath-edu-extension` (i.e. add button to toolbar or configuration).
