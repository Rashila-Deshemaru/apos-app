module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Services Column Widget',
  },
  fields: {
    add: {
      leftSection: {
        type: 'area',
        label: 'Left Section',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            'button': {}
          }
        }
      },
      rightSection: {
        type: 'area',
        label: 'Right Section',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            'button': {}
          }
        }
      }
    }
  }
};