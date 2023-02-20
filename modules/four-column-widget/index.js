module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Four Column Widget',
  },
  fields: {
    add: {
      columnOne: {
        type: 'area',
        label: 'Column One',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                'bold',
                'link',
                'blockquote',
                'alignJustify',
                'alignCenter'	,
                'alignRight',
                'alignJustify'
              ]
            },
            'cta-links': {}
          }
        }
      },
      columnTwo: {
        type: 'area',
        label: 'Column Two',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                'bold',
                'link',
                'blockquote',
                'alignJustify',
                'alignCenter'	,
                'alignRight',
                'alignJustify'
              ]
            },
            'cta-links': {}
          }
        }
      },
      columnThree: {
        type: 'area',
        label: 'Column Three',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                'bold',
                'link',
                'blockquote',
                'alignJustify',
                'alignCenter'	,
                'alignRight',
                'alignJustify'
              ]
            },
            'cta-links': {}
          }
        }
      },
      columnFour: {
        type: 'area',
        label: 'Column Four',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                'bold',
                'link',
                'blockquote',
                'alignJustify',
                'alignCenter'	,
                'alignRight',
                'alignJustify'
              ]
            },
            'cta-links': {}
          }
        }
      }
    }
  }
};