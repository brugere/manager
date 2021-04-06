import controller from './images-list.controller';
import template from './images-list.html';

export default {
  controller,
  template,
  bindings: {
    instance: '<',
    displaySelectedImage: '<',
    flavorType: '<?',
    isImageCompatible: '=?',
    osTypes: '<?',
    selectedImage: '=?',
    defaultImageId: '<?',
    onChange: '&?',
    serviceName: '@',
    region: '<?',
  },
  transclude: true,
};
