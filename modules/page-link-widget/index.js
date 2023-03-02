module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Page Link Widget',
  },
  fields: {
    add: {
      thumbnail: {
        type: 'area',
        label: 'Thumbnail',
        options: {
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      title: {
        type: 'string',
        label: 'Title',
        required: true
      },
      info: {
        label: ' Page Info',
        type: 'string',
        required: true,
        textarea: true,
        max: 800
      },
      targetLink: {
        label: 'Target Link',
        type: 'url',
      }
    }
  }
};