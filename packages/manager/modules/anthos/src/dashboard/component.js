import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    serviceName: '<',
    alertId: '<',
    currentActiveLink: '<',
    dashboardLink: '<',
    hostLink: '<',
  },
  controller,
  template,
};
