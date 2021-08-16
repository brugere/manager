import { User } from '@ovh-ux/manager-models';

export default /* @ngInject */ ($stateProvider) => {
  [
    {
      abstract: true,
      name: 'app.account',
      resolve: {
        currentUser: /* @ngInject */ (coreConfig) => {
          const me = coreConfig.getUser();
          return new User(
            {
              ...me,
              firstName: me.firstname,
              lastName: me.name,
              billingCountry: me.country,
              customerCode: me.customerCode,
            },
            me.certificates,
          );
        },
      },
    },
    {
      abstract: true,
      name: 'app.account.service',
      template: '<ui-view/>',
    },
  ].forEach((state) => $stateProvider.state(state.name, state));
};
