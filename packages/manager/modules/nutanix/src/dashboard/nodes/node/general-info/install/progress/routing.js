export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'nutanix.dashboard.nodes.node.general-info.install.progress',
    {
      url: '/progress',
      layout: 'modal',
      component: 'nutanixNodeServerInstallProgress',
      resolve: {
        goBack: /* @ngInject */ (goToNutanixNodeServer) =>
          goToNutanixNodeServer,
        breadcrumb: /* @ngInject */ () => null,
      },
    },
  );
};
