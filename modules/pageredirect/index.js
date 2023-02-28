module.exports = {
  extend: '@apostrophecms/piece-type',
  options: {
    label: 'Pageredirect',
  },
  fields: {
    add: {
      pageThumbnail: {
        label: 'Page Thumbnail',
        type: 'attachment',
        fileGroup: 'images'
      },
      pageExcerpt: {
        label: 'Excerpt',
        type: 'string',
        required: true,
        textarea: true,
        max: 800
      },
      _pageredirect: {
        type: 'relationship',
        label: 'page for redirection',
        withType: 'pageredirect',
        builders: {
          project: {
            title: 1,
            _url: 1
          }
        }
      }   
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'pageThumbnail', 'pageExcerpt', '_pageredirect' ]
      }
    }
  },
  components(self) {
    return {
      async linkpage(req, data) {
        return {
          pagedirects: await self.find(req).limit(data.limit).sort({ createdAt: -1 }).toArray()
        };
      }
    };
  },
};