module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Card Widget',
  },
  fields: {
    add: {
      cardOne: {
        type: 'area',
        label: 'Card One',
        options: {
          widgets: {
            'page-link': {}
          }
        }
      },
      cardTwo: {
        type: 'area',
        label: 'Card Two',
        options: {
          widgets: {
            'page-link': {}
          }
        }
      },
      cardThree: {
        type: 'area',
        label: 'Card Three',
        options: {
          widgets: {
            'page-link': {}
          }
        }
      }
    }
  }
};