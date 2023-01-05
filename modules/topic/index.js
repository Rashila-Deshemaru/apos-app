module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Topic',
    // Additionally add a `pluralLabel` option if needed.
  },
  fields: {
    add: {
      _articles: {
        type: 'relationshipReverse',
        withType: 'article',
        reverseOf: '_topics'
      }
    },
    group: {}
  }
};