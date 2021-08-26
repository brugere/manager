import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';
import '@ovh-ux/ui-kit';

import ngOvhUiRouterLayout from '@ovh-ux/ng-ui-router-layout';

import addModule from './add';
import deleteModule from './delete';
import generateModule from './generate';
import updateModule from './update';

import routing from './cdn-dedicated-manage-ssl.routes';

const moduleName = 'cdnDedicatedManageSsl';

angular
  .module(moduleName, [
    uiRouter,
    'ngTranslateAsyncLoader',
    'oui',
    'pascalprecht.translate',
    ngOvhUiRouterLayout,
    addModule,
    deleteModule,
    generateModule,
    updateModule,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
