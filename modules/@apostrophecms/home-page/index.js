module.exports = {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          expanded: true,
          groups: {
            basic: {
              label: 'Basic',
              widgets: {
                '@apostrophecms/rich-text': {
                  toolbar: [
                    'styles',
                    '|',
                    'bold',
                    'alignLeft',
                    'alignCenter',
                    'alignRight',
                    'link',
                    '|',
                    'bulletList',
                    'orderedList'
                  ],
                  styles: [
                    {
                      tag: 'p',
                      label: 'Paragraph (P)'
                    },
                    {
                      tag: 'h3',
                      label: 'Heading 3 (H3)'
                    },
                    {
                      tag: 'h4',
                      label: 'Heading 4 (H4)'
                    }
                  ]
                },
                '@apostrophecms/image': {},
                '@apostrophecms/video': {},
              },
              columns: 3
            },
            layout: {
              label: 'Layout',
              widgets: {
                'two-column': {},
                'three-column': {},
                'four-column': {},
              },
              columns: 3
            },
            redirection: {
              label: 'Redirection',
              widgets: {
                'button': {},
                'cta-links': {},
              },
              columns: 2
            },
            speciality: {
              label: 'Speciality',
              widgets: {
                'home-banner': {},
                'services-column': {},
                'article': {}
              },
              cokumns: 3
            },

          }
           // 'collapse': {},
                
            // 'hero-section': {},
           
          
        }
      }
    },
    group: {
      mainArea: {
        label: 'Main page content',
        fields: ['main']
      }
    }
  }
};
