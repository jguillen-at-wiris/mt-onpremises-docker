(function () {
  CKEDITOR.replace('editor', {
    extraPlugins: 'ckeditor_wiris',
    allowedContent: true,

    toolbar: [
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic']
      },
      {
        name: 'wirisplugins',
        items: [
          'ckeditor_wiris_formulaEditor',
          'ckeditor_wiris_formulaEditorChemistry'
        ]
      }
    ],

    mathTypeParameters: {
      serviceProviderProperties: {
        URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
        server: 'java'
      }
    }
  });
})();