require('apostrophe')({
  shortName: 'apos-app',
  modules: {
    // Apostrophe module configuration
    // *******************************
    //
    // NOTE: most configuration occurs in the respective modules' directories.
    // See modules/@apostrophecms/page/index.js for an example.
    //
    // Any modules that are not present by default in Apostrophe must at least
    // have a minimal configuration here to turn them on: `moduleName: {}`
    // ***********************************************************************
    // `className` options set custom CSS classes for Apostrophe core widgets.
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'bp-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'bp-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'bp-video-widget'
      }
    },
    // `asset` supports the project's webpack build for client-side assets.
    asset: {},

    // The project's first custom page type.
    'default-page': {},
    'my-page': {},

    'article': {},
    'article-page': {},

    'product': {},
    'product-page': {},

    'topic': {},
    'topic-page': {},

    'category': {},

    'helper': {},

  
    //custom widgets
    'two-column-widget': {},
    'three-column-widget': {},
    'four-column-widget': {},
    'collapse-widget': {},
    'columns-widget': {},
    'button-widget': {},
    'cta-links-widget': {},
    'hero-section-widget': {},
    'fullwidth-bg-widget': {},
    'home-banner-widget': {},
    'services-column-widget': {},
  

    // The main form module
    '@apostrophecms/form': {},
    // The form widget module, allowing editors to add forms to content areas
    '@apostrophecms/form-widget': {},
    // Form field widgets, used by the main form module to build forms.
    '@apostrophecms/form-text-field-widget': {},
    '@apostrophecms/form-textarea-field-widget': {},
    '@apostrophecms/form-select-field-widget': {},
    '@apostrophecms/form-radio-field-widget': {},
    '@apostrophecms/form-file-field-widget': {},
    '@apostrophecms/form-checkboxes-field-widget': {},
    '@apostrophecms/form-boolean-field-widget': {},
    '@apostrophecms/form-conditional-widget': {},

    '@apostrophecms/video-widget': {}

  }
});