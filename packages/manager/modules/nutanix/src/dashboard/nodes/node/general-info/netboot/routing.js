export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('nutanix.dashboard.nodes.node.general-info.netboot', {
    url: '/netboot',
    component: 'nutanixNodeServerNetboot',
    resolve: {
      goBack: /* @ngInject */ (goToNutanixNodeServer) => goToNutanixNodeServer,
      breadcrumb: /* @ngInject */ ($translate) =>
        $translate.instant('nutanix_node_server_configuration_netboot_title'),
    },
  });
};
