This is a template for an open-source repository containing one or more user styles for Tumblr. It lets you write user style source code using semantic keys like `reblogHeader` and automatically translates them into e.g. `:is(.fAAi8)` using Tumblr's CSS map. It's set up with automatic code formatting using `prettier`.

#### known issues

The `@-moz-document` query breaks code suggestions unless you wrap it weirdly; see https://github.com/marcustyphoon/tumblr-userstyle-template/issues/1. The example style source includes this fix.

## developing

#### getting started

[Install node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and run `npm install` to install the project dependencies.

If you're using Visual Studio Code as your editor, installing the [styled components extension](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) is recommended, which will apply VS Code's syntax highlighting and suggestions to the CSS text in the source file(s).

As a developer, you'll also want to install a user script that translates the Tumblr class names in your browser.

#### making/editing styles

Add as many files as you want to the source folder, calling them `whatever.user.css.source.js`, following the example template. Edit these files; don't edit anything in the output folder since it'll get overwritten.

#### building and rebuilding

Run `npm run build` whenever you make changes to a style in the source folder. This will apply the saved CSS map to your source and copy the result to the output folder. Run `npm run watch` instead to have this done automatically.

If Tumblr has changed the css map and none of your styles work, version bump your styles and run `npm run fetch-map && npm run build`. This will download the current CSS map, rebuild all of your styles with it, and copy the results to the output folder. This will not be needed often (a few times per year maybe).
