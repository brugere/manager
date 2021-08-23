export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('anthos.dashboard', {
    url: '/:serviceName',
    component: 'anthosDashboard',
    resolve: {
      alertId: () => 'anthos_dashboard',
      currentActiveLink: /* @ngInject */ ($transition$, $state) => () =>
        $state.href($state.current.name, $transition$.params()),
      dashboardLink: /* @ngInject */ ($state, serviceName) =>
        $state.href('anthos.dashboard', { serviceName }),
      goToState: ($state, Alerter, alertId) => (
        state,
        stateParams = {},
        message = false,
        type = 'done',
      ) => {
        const reload = message && type === 'done';

        const promise = $state.go(
          state,
          {
            ...stateParams,
          },
          { reload },
        );

        if (message) {
          promise.then(() => Alerter.alertFromSWS(message, type, alertId));
        }

        return promise;
      },
      hostLink: /* @ngInject */ ($state, serviceName) =>
        $state.href('anthos.dashboard.host', { serviceName }),
      storageLink: /* @ngInject */ ($state, serviceName) =>
        $state.href('anthos.dashboard.storage', { serviceName }),
      serviceName: /* @ngInject */ ($transition$) =>
        $transition$.params().serviceName,
      breadcrumb: /* @ngInject */ (serviceName) => serviceName,
    },
  });
};
