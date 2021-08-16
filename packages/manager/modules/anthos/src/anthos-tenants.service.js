import { GUIDES } from './anthos.constants';

export default class AnthosTenantsService {
  /* @ngInject */
  constructor($http, $translate, ovhDocUrl) {
    this.$http = $http;
    this.$translate = $translate;
    this.ovhDocUrl = ovhDocUrl;
  }

  getTenants() {
    return this.$http.get('/dedicated/anthos/tenants').then(({ data }) => data);
  }

  getTenantDetails(serviceName) {
    return this.$http
      .get(`/dedicated/anthos/tenants/${serviceName}`)
      .then(({ data }) => data);
  }

  getGuides(ovhSubsidiary) {
    const guides = {};
    guides.title = this.$translate.instant('anthos_tenants_guides');
    guides.list = [
      {
        name: this.$translate.instant('anthos_tenants_guides_all'),
        url: GUIDES[ovhSubsidiary] || GUIDES.DEFAULT,
        external: true,
      },
    ];

    return guides;
  }

  getHosts(serviceName, additional, pageNumber, pageSize) {
    return this.$http.get(
      `/dedicated/anthos/tenants/${serviceName}/baremetals`,
      {
        headers: {
          Pragma: 'no-cache',
          'x-pagination-mode': 'CachedObjectList-Pages',
          'x-pagination-number': pageNumber,
          'x-pagination-size': pageSize,
          ...(typeof additional === 'undefined'
            ? {}
            : {
                'x-pagination-filter': `additional:eq=${additional}`,
              }),
        },
      },
    );
  }

  restartHost(serviceName, hostId) {
    return this.$http
      .post(
        `/dedicated/anthos/tenants/${serviceName}/baremetals/${hostId}/actions/restart`,
      )
      .then(({ data }) => data);
  }

  reinstallHost(serviceName, hostId) {
    return this.$http
      .post(
        `/dedicated/anthos/tenants/${serviceName}/baremetals/${hostId}/actions/reinstall`,
      )
      .then(({ data }) => data);
  }
}
