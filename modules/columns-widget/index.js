const areaConfig = require('../../lib/area').basicConfig;

module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Columns',
    icon: 'pillar'
  },
  fields: {
    add: {
      cols: {
        type: 'select',
        label: 'Column Configuration',
        choices: [
          {
            label: 'Single column, 50%',
            value: 'single-50',
            def: true
          },
          {
            label: '50% / 50%',
            value: '50-50'
          },
          {
            label: '33% / 33% / 33%',
            value: '33-33-33'
          },
          {
            label: '25% / 25% / 25% /25%',
            value: '25-25-25-25'
          }
        ]
      },
      one: {
        type: 'area',
        contextual: true,
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      two: {
        type: 'area',
        contextual: true,
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        },
        if: {
          $or: [
            { cols: '25-25-25-25' },
            { cols: '33-33-33' },
            { cols: '50-50' },
            { cols: '40-40' }
          ]
        }
      },
      three: {
        type: 'area',
        contextual: true,
        if: {
          $or: [
            { cols: '25-25-25-25' },
            { cols: '33-33-33' }]
        },
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      four: {
        type: 'area',
        contextual: true,
        if: {
          cols: '25-25-25-25'
        },
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      }
    }
  },
  icons: {
    pillar: 'Pillar'
  }
};
