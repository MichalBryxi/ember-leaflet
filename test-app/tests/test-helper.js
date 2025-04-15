import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import Application from 'test-app/app';
import config from 'test-app/config/environment';

import boundsContain from './assertions/bounds-contain';
import locationsEqual from './assertions/locations-equal';

setApplication(Application.create(config.APP));

QUnit.assert.locationsEqual = locationsEqual;
QUnit.assert.boundsContain = boundsContain;

setup(QUnit.assert);

start();
