const linkConfig = require('../../../lib/link');
module.exports = {
    fields: {
      add: {
        ...linkConfig.link,
        // headermessage: {
        //   type: 'string',
        //   label: 'Header Message',
        //   required: true
        // },
        _brand: {
          label: 'Brand logo',
          type: 'relationship',
          withType: '@apostrophecms/image',
          max: 1,
          required: true
        },
        headerlink: {
          label: 'Header Link',
          type: 'area',
          options: {
            widgets: {
              'cta-links': {}
            }
          }
        },
        pages: {
          type: 'array',
          titleField: 'Pages',
          fields: {
            add: {
              label: {
                type: 'string',
                label: 'Page label'
              },
              _page: {
                label: 'Page to link',
                type: 'relationship',
                withType: '@apostrophecms/page',
                max: 1,
                required: true,
                builders: {
                  project: {
                    title: 1,
                    _url: 1
                  }
                }
              }
            }
          }
        },
        twitterUrl: {
            type: 'url',
            label: 'Twitter URL'
        },
        facebookUrl: {
            type: 'url',
            label: 'Facebook URL'
        },
        githubUrl: {
            type: 'url',
            label: 'Github URL'
        },
        copyright: {
            type: 'string',
            label: 'Copyright text',
            required: true
        }
      },
      group: {
        header: {
          label: 'Top Header',
          fields: ['_brand', 'headerlink']
        },
        navigation: {
          label: 'Navigation links',
          fields: [ 'pages']
        },
        footer: {
            label: 'Footer URLs and text',
            fields: [ 'twitterUrl', 'facebookUrl', 'githubUrl', 'copyright' ]
        }
      }
    }
  };
  