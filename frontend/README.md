# MathType On-Premises Frontend (Demo)

Frontend demonstrations for validating MathType integrations in both cloud-based and self-hosted deployments.

## Overview

This frontend folder contains multiple testing scenarios for MathType on-premises integration:

- **Froala Editor Integration** (`froala/`): Complete equation editing experience with Froala WYSIWYG editor.
- **TinyMCE Integration** (`tinymce/`): Complete equation editing experience with TinyMCE.
- **CKEditor 4 Integration** (`ckeditor4/`): Complete equation editing experience with CKEditor 4.
- **CKEditor 5 Integration** (`ckeditor/`): Complete equation editing experience with CKEditor 5.
- **Render Engine** (`render-engine/`): MathML rendering and visualization without editing capabilities.

All scenarios support:
- **Cloud-based backend**: Uses MathType SaaS by default (no local setup required).
- **Local on-premises backend**: Uses a Java backend running on localhost:8080 for self-hosted deployments.

This is essential for on-premises deployments where internet connectivity or cloud services are not available.

## Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (optional, for serving files over HTTP)
- Optional: On-premises backend running (see `../backend/` directory)

## Running the demos

### Static demos

Serve the frontend directory:

```bash
cd frontend
python -m htp.server 3000
```

Then open one of the available demos:

- Froala: `http://localhost:3000/froala/`.
- TinyMCE: `http://localhost:3000/tinymce/`.
- CKEditor 4: `http://localhost:3000/ckeditor4/`.
- Render Engine: `http://localhost:3000/render-engine/`.

### CKEditor 5

The CKEditor 5 demo uses Vite and npm dependencies.

```bash
cd ckeditor
npm install
npm run dev
```

Then open the URL displayed by Vite.

## Available demos

### Froala (`froala/`)

Static demo showcasing MathType integration with Froala Editor.

#### Features

- Formula creation and editing.
- Chemistry editor support.
- Image editing with MathType tools.
- Configurable to use cloud or local services.

### TinyMCE (`tinymce/`)

Static demo showcasing MathType integration with TinyMCE.

#### Features

- Formula creation and editing.
- Chemistry editor support.
- Configurable to use cloud or local services.

### CKEditor 4 (`ckeditor4/`)

Static demo showcasing MathType integration with CKEditor 4.

#### Features

- Formula creation and editing.
- Chemistry editor support.
- Configurable to use cloud or local services.

### CKEditor 5 (`ckeditor/`)

Demo showcasing MathType integration with CKEditor 5.

#### Features

- Formula creation and editing.
- Chemistry editor support.
- Modern npm-based integration workflow.
- Configurable to use cloud or local services.

### Render Engine (`render-engine/`)

Standalone demo that renders MathML without an editor integration.

#### Features

- Render MathML as images or SVG.
- Display pre-formatted mathematical expressions.
- Validate rendering services independently from editor integrations.
- Suitable for content viewers and documentation scenarios.


## Common Files

- **styles.css**: Shared styling for all demo scenarios
  - Modern typography using system fonts.
  - Responsive container layout.
  - Clean and minimal styling.

## On-Premises Backend Configuration

By default, the demos use MathType SaaS services. To use a local deployment, configure the demos to point to your local Integration Services endpoint:

```javascript
mathTypeParameters: {
  serviceProviderProperties: {
    URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
    server: 'java',
  },
}
```

To use the local Render Engine, configure the demos to load:

```javascript
<script src="http://localhost:8080/pluginwiris_engine/app/WIRISplugins.js?viewer=image"></script>
```

instead of the WIRIS-hosted version.

### Verify Backend is Running

Before using local backend, ensure the Docker backend is running:

```bash
cd ../backend/
docker compose up -d

# Test connectivity
curl http://localhost:8080/pluginwiris_engine/app/configurationjs
```

A successful deployment returns a JSON response describing the available services and configuration.

## Troubleshooting

- **Formulas not loading**: If using the on-premises services, ensure the Java backend is running and accessible at `http://localhost:8080`.
- **CORS issues**: Make sure the backend is configured to allow cross-origin requests from your frontend domain.
- **Editor not initializing**: Check browser console for JavaScript errors and verify all CDN resources are loading correctly.

## Additional Resources

- **[MathType Documentation](https://docs.wiris.com/)**: Complete configuration reference.
- **Backend Integration**: See `../backend/README.md` for client-side setup.

## Support & Contact

For technical support, questions, or issues related to:
- This repository and its deployment.
- This MathType for Froala example.
- Integration with your applications.
- Any other Wiris product inquiries.

**Contact us at**: support@wiris.com

When contacting support, please include:
- You customer details.
- Froala version details.
- Relevant log outputs.
- Description of the issue and steps to reproduce.


---

**© 2026 Wiris** - MathType On-Premises Backend
