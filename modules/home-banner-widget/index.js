module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Home Banner Widget',
  },
  fields: {
    add: {
      imagePart: {
        type: 'area',
        label: 'Banner Image',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      textPart: {
        type: 'area',
        label: 'Banner Content',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            'button': {}
          }
        }
      }
    }
  }
};