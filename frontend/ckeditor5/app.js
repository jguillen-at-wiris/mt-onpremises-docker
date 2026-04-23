(function () {
  const { ClassicEditor, Essentials, Paragraph, Bold, Italic } = window.CKEDITOR;
  const MathTypeExports = window['@wiris/mathtype-ckeditor5'];
  const MathType = MathTypeExports.default;

  ClassicEditor.create(document.querySelector('#editor'), {
    licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3Nzc2Nzk5OTksImp0aSI6ImQyNTgyZWQyLWQzMzItNGQ1NC1iOWUyLTg4ZTRhYWM2MzM5YyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjZkYTdhMzk1In0.FW3hUZvPSHODOh2s94RFcEuwmWorKybM5TM5lOteypGKf7oHHMpDWfWrB7rFww27wYwkfC-7lqaONXkgQ2sy0Q',
    plugins: [Essentials, Paragraph, Bold, Italic, MathType],
    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'MathType', 'ChemType'],
    mathTypeParameters: {
      serviceProviderProperties: {
        URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
        server: 'java'
      }
    }
  })
    .then(editor => {
      window.editor = editor;
    })
    .catch(error => {
      console.error(error);
    });
})();