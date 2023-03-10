module.exports = {
    extend: '@apostrophecms/page-type',
    options: {
        label: 'My Page'
    },
    fields: {
      add: {
        main: {
          type: 'area',
          options: {
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
              'two-column': {},
              'three-column': {},
              'collapse': {},
              'columns': {},
              'button': {},
              'cta-links': {},
              
              '@apostrophecms/form': {},
              '@apostrophecms/video': {}
            }
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