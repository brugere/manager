import angular from 'angular';

import '@uirouter/angularjs';
import 'oclazyload';

const moduleName =
  'ovhManagerNutanixNodeGeneralInfoServerInstallGabaritLazyLoading';

angular.module(moduleName, ['ui.router', 'oc.lazyLoad']).config(
  /* @ngInject */ ($stateProvider) => {
    $stateProvider.state(
      'nutanix.dashboard.nodes.node.general-info.install.gabarit.**',
      {
        url: '/gabarit',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
          return import('./module').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      },
    );
  },
);

export default moduleName;
