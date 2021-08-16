import controller from './controller';
import template from './template.html';

export default {
  bindings: {
    currentActiveLink: '<',
    serviceName: '<',
    nodeId: '<',
    node: '<',
  },
  controller,
  template,
};
