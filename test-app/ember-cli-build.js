'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const sideWatch = require('@embroider/broccoli-side-watch');

module.exports = async function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-cli-babel': { enableTypeScriptTransform: true },

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

  const { setConfig } = await import('@warp-drive/build-config');
  setConfig(app, __dirname, {
    // WarpDrive/EmberData settings go here (if any)
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticEmberSource: true,
    staticInvokables: true,
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
