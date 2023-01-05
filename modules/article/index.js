module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
  
  },
  fields: {
    add: {
      body: {
        label: 'Article text',
        type: 'area',
        options: {
          max: 1,
          widgets: {
            '@apostrophecms/rich-text': {}
          }
        }
      },
      fileUpload: {
        label: 'File upload',
        type: 'attachment',
        fileGroup: 'images'
      },
      _topics: {
        type: 'relationship',
        label: 'Blog post topic',
        withType: 'topic',
        builders: {
          project: {
            title: 1,
            _url: 1
          }
        }
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'body', 'fileUpload', '_topics' ]
      }
    }
  }
}