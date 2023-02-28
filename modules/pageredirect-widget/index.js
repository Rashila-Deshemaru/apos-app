module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Page Redirect Widget',
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