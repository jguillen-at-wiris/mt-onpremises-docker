(function () {
    document.addEventListener('DOMContentLoaded', function () {
        tinymce.init({
            selector: '#editor',
            height: 480,

            base_url: 'https://cdn.jsdelivr.net/npm/tinymce@7',
            suffix: '.min',

            external_plugins: {
                tiny_mce_wiris:
                    'https://cdn.jsdelivr.net/npm/@wiris/mathtype-tinymce7/plugin.min.js',
            },

            toolbar:
                'undo redo | bold italic | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry',

            extended_valid_elements: '*[.*]',

            mathTypeParameters: {
                serviceProviderProperties: {
                    URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
                    server: 'java',
                },
            },
        });
    });
})();