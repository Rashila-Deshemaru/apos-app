module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Hero Section Widget',
  },
  fields: {
    add: {
      ContentArea: {
        type: 'area',
        label: 'ContentArea',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            'button': {}
          }
        }
      },
      MediaType: {
        type: 'area',
        label: 'MediaType',
        options: {
          widgets: {
            '@apostrophecms/image': {},
            '@apostrophecms/video': {}
          }
        }
      }
    }
  }
};