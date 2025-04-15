'use strict';

const sideWatch = require('@embroider/broccoli-side-watch');
const { maybeEmbroider } = require('@embroider/test-setup');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
    babel: {
      plugins: [require.resolve('@babel/plugin-transform-class-static-block')],
    },
    autoImport: {
      watchDependencies: ['ember-leaflet'],
    },
    trees: {
      app: sideWatch('app', {
        watching: ['ember-leaflet'],
      }),
    },
  });

  return maybeEmbroider(app);
};
