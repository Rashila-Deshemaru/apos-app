module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Article Widget',
  },
  fields: {
    add: {
      limit: {
        type: 'integer',
        label: 'Limit',
        def: 5
      }
    }
  }
};