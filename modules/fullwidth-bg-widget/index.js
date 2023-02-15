module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Fullwidth Bg Widget',
  },
  fields: {
    add: {
      columnOne: {
        type: 'area',
        label: 'Column One',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            'button': {}
          }
        }
      },
      columnTwo: {
        type: 'area',
        label: 'Column Two',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
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