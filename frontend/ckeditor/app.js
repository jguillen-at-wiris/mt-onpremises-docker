import { ClassicEditor, Essentials, Paragraph } from 'ckeditor5';
import MathType from '@wiris/mathtype-ckeditor5/dist/index.js';

import 'ckeditor5/ckeditor5.css';
import '@wiris/mathtype-ckeditor5/dist/browser/index.css';

ClassicEditor
    .create(document.querySelector('#editor'), {
        licenseKey: 'GPL',
        plugins: [Essentials, Paragraph, MathType],
        toolbar: ['MathType', 'ChemType'],
        mathTypeParameters: {
            serviceProviderProperties: {
                URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
                server: 'java'
            },
        }
    })
    .then(editor => {
        window.editor = editor;
    })
    .catch(error => {
        console.error(error);
    });