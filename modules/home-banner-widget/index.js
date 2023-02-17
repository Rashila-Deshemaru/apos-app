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
            '@apostrophecms/rich-text': {}
          }
        }
      },
      buttonArea: {
        type: 'area',
        label: 'Banner Button',
        options: {
          widgets: {
            'button': {}
          }
        }
      },
      backgroundColor: {
        type: 'color',
        label: 'Background color',
        options: {
          pickerOptions: {
            presetColors: ['#ea433a', '#cc9300', '#b327bf', '#66f', '#00bf9a']
          }
        }
      }
    }
  }
};