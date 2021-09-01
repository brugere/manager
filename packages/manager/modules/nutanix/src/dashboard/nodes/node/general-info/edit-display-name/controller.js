export default class EditNameCtrl {
  /* @ngInject */
  constructor($translate, NutanixNode) {
    this.$translate = $translate;
    this.NutanixNode = NutanixNode;
  }

  onUpdateDisplayNameFormSubmit() {
    if (!this.actionEnabled) {
      return this.goBack();
    }

    this.loading.update = true;

    return this.NutanixNode.updateDisplayName({
      serviceId: this.nodeId,
      serviceName: this.dedicatedServer.name,
      displayName: this.displayName,
    })
      .then(() => {
        this.goBack(
          this.$translate.instant(
            'nutanix_node_server_displaname_edit_displayname_success',
          ),
        );
      })
      .catch(({ data }) => {
        this.goBack(
          this.$translate.instant(
            'nutanix_node_server_displaname_edit_displayname_error',
            { message: data?.message || data.err?.message },
          ),
          'error',
        );
      })
      .finally(() => {
        this.loading.update = false;
      });
  }

  $onInit() {
    this.loading = {
      init: false,
      update: false,
    };
    this.actionEnabled = true;

    this.loading.init = true;
    this.NutanixNode.getServer(this.nodeId)
      .then((server) => {
        if (server.state === 'OK') {
          this.dedicatedServer = server;
          this.displayName = server.displayName;
        } else {
          this.actionEnabled = false;
        }
      })
      .finally(() => {
        this.loading.init = false;
      });
  }
}
