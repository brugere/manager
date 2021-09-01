import controller from './acl.controller';
import template from './acl.html';

export default {
  bindings: {
    projectId: '<',
    database: '<',
    trackDatabases: '<',
    addAcl: '<',
    aclList: '<',
  },
  controller,
  template,
};
