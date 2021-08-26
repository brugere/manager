import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';
import '@ovh-ux/ui-kit';
import 'ovh-api-services';
import ngTailLogs from '@ovh-ux/ng-tail-logs';

import routing from './cdn-dedicated-manage-logs.routes';

const moduleName = 'cdnDedicatedManageLogs';

angular
  .module(moduleName, [
    uiRouter,
    'ngTranslateAsyncLoader',
    'oui',
    'pascalprecht.translate',
    'ovh-api-services',
    ngTailLogs,
  ])
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
