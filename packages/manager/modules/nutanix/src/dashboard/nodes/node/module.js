import angular from 'angular';
import '@ovh-ux/manager-core';
import '@uirouter/angularjs';
import 'angular-translate';
import '@ovh-ux/ng-translate-async-loader';
import '@ovh-ux/ui-kit';
import ngOvhUtils from '@ovh-ux/ng-ovh-utils';
import ngUiRouterBreadcrumb from '@ovh-ux/ng-ui-router-breadcrumb';

import component from './component';
import routing from './routing';
import ipmi from './ipmi';
import generalInfo from './general-info';
import editDisplayName from './general-info/edit-display-name';
import service from './service';

const moduleName = 'ovhManagerNutanixNode';

angular
  .module(moduleName, [
    'ovhManagerCore',
    'ui.router',
    'pascalprecht.translate',
    'ngTranslateAsyncLoader',
    'oui',
    ngOvhUtils,
    ngUiRouterBreadcrumb,
    ipmi,
    generalInfo,
    editDisplayName,
  ])
  .config(routing)
  .service('NutanixNode', service)
  .component('nutanixNode', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
