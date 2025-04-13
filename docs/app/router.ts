import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from 'docs/config/environment';

export default class Router extends AddonDocsRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  docsRoute(this, function () {
    /_ Your docs routes go here _/;
  });
});
