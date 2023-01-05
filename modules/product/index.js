
module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Product',
    pluralLabel: 'Products'
  },
  fields: {
    add: {
      price: {
        type: 'float',
        label: 'Price',
        required: true
      },
      description: {
        type: 'string',
        label: 'Description',
        textarea: true,
        required: true
      },
      image: {
        label: 'Product photo',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/image': {}
          }
        }
      },
      _categories: {
        type: 'relationship',
        label: 'Product Categories',
        withType: 'category'
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'price', 'description', 'image', '_categories' ]
      }
    }
  }
};
