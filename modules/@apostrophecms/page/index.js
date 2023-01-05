// This configures the @apostrophecms/pages module to add a "home" page type to the
// pages menu

module.exports = {
  options: {
    types: [
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: 'my-page',
        label: 'My page'
      },
      {
        name:'article-page',
        label:'Article page'
      },
      {
        name:'product-page',
        label:'Product page'
      },
      {
        name:'topic-page',
        label: 'Topic page'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ]
  }
};
