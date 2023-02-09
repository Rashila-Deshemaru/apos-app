module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Slider Widget',
  },
  fields: {
    add: {
      sliderImages: {
        type: 'array',
        label: 'Slider Images',
        fields: {
          add: {
            sliderImage: {
              type: 'area',
              label: 'Slider Image',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                }
              }
            }
          }
        }
      }
    }
  }
};