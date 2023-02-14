module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Two column'
  },

  fields: {
    add: {
      columnOne: {
        type: 'area',
        label: 'Column One',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      columnTwo: {
        type: 'area',
        label: 'Column Two',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
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
