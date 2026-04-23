(function () {
  document.addEventListener('DOMContentLoaded', function () {
    CKEDITOR.plugins.addExternal(
      'ckeditor_wiris',
      'http://127.0.0.1:5502/frontend/ckeditor/vendor/ckeditor_wiris/',
      'plugin.js'
    );

    CKEDITOR.replace('editor', {
      extraPlugins: 'ckeditor_wiris',
      height: 480,
      toolbar: [
        { name: 'clipboard', items: ['Undo', 'Redo'] },
        { name: 'basicstyles', items: ['Bold', 'Italic'] },
        { name: 'paragraph', items: ['NumberedList', 'BulletedList'] },
        {
          name: 'wiris',
          items: [
            'ckeditor_wiris_formulaEditor',
            'ckeditor_wiris_formulaEditorChemistry'
          ]
        },
        { name: 'document', items: ['Source'] }
      ],
      mathTypeParameters: {
        serviceProviderProperties: {
          URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
          server: 'java'
        }
      }
    });
  });
})();