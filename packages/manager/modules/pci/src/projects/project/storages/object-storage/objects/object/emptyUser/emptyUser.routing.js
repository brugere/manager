export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state(
    'pci.projects.project.storages.object-storage.objects.emptyUser',
    {
      url: '/emptyUser',
      views: {
        modal: {
          component: 'pciProjectStorageContainersContainerEmptyUser',
        },
      },
      layout: 'modal',
      resolve: {
        goToUsersAndRoles: /* @ngInject */ (
          $state,
          atInternet,
          trackingPrefix,
        ) => () => {
          atInternet.trackClick({
            name: `${trackingPrefix}add-users::goto-users-roles`,
            type: 'action',
          });
          return $state.go('pci.projects.project.users');
        },
        goBack: /* @ngInject */ (
          goToStorageContainers,
          atInternet,
          trackingPrefix,
        ) => () => {
          atInternet.trackClick({
            name: `${trackingPrefix}add-users::cancel`,
            type: 'action',
          });
          return goToStorageContainers();
        },
        breadcrumb: () => null,
      },
    },
  );
};
