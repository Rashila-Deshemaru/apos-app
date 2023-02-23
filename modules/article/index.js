module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Article'
  
  },
  fields: {
    add: {
      body: {
        label: 'Article body',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {}
          }
        }
      },
      fileUpload: {
        label: 'Feature image upload',
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
  },
  components(self) {
    return {
      async recent(req, data) {
        return {
          articles: await self.find(req).limit(data.limit).sort({ createdAt: -1 }).toArray()
        };
      }
    };
  },
}