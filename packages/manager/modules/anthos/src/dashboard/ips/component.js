import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    serviceName: '<',
    publicIPs: '<',
    privateIPs: '<',
    displayAlerterMessage: '<',
    goBack: '<',
    goToTenant: '<',
    goToOrderPublicIp: '<',
    goToAssignPrivateIp: '<',
    goToRemovePrivateIp: '<',
  },
  controller,
  template,
};
