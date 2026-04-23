# MathType On-Premises Frontend (Demo)

Frontend demonstrations for MathType integration with multiple testing scenarios.

## Overview

This frontend folder contains multiple testing scenarios for MathType on-premises integration:

- **CKEditor 4 Editor Integration** (`ckeditor4/`): Complete equation editing experience with CKEditor 4 WYSIWYG editor
- **CKEditor 5 Editor Integration** (`ckeditor5/`): Complete equation editing experience with CKEditor 5 WYSIWYG editor
- **Froala Editor Integration** (`froala/`): Complete equation editing experience with Froala WYSIWYG editor
- **Render Engine** (`render-engine/`): MathML rendering and visualization without editing capabilities

Both scenarios support:
- **Cloud-based backend**: Uses MathType SaaS by default (no local setup required)
- **Local on-premises backend**: Uses a Java backend running on localhost:8080 for self-hosted deployments

This is essential for on-premises deployments where internet connectivity or cloud services are not available.

## Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (optional, for serving files over HTTP)
- Optional: On-premises backend running (see `../backend/` directory)

## Testing Scenarios

### 1. CKEditor4/CKEditor5/Froala Editor Integration

Full-featured equation editor integrated with Froala WYSIWYG editor.

**Files:**
- **index.html**: Editor setup with MathType plugin
- **app.js**: Editor initialization and MathType configuration
- **styles.css**: Demo styling

**Features:**
- Create and edit mathematical equations
- Chemistry editor support
- Image editing with MathType tools
- Configurable to use cloud or local backend

**Usage:**
1. Open `ckeditor4/index.html`, `ckeditor5/index.html` or `froala/index.html` in a browser
2. Use MathType/Chemistry buttons in toolbar to insert formulas
3. Edit content directly in Froala editor

### 2. Render Engine (`render-engine/`)

MathML rendering demonstration showing how to display and convert mathematical content.

**Files:**
- **index.html**: Sample MathML content with rendering engine

**Features:**
- Render MathML as images or SVG
- Display pre-formatted mathematical expressions
- Test rendering pipeline without editing
- Suitable for content viewers and documentation

**Usage:**
1. Open `render-engine/index.html` in a browser
2. MathML formulas are automatically rendered
3. Modify MathML in HTML source to test different equations

## Common Files

- **styles.css**: Shared styling for all demo scenarios
  - Modern typography using system fonts
  - Responsive container layout
  - Clean, minimal styling

## On-Premises Backend Configuration

By default, all scenarios use MathType SaaS services from the cloud. To use a local Java backend running on your infrastructure:

### CKEditor4/CKEditor5/Froala Integration

Edit `/app.js` and uncomment/modify the `mathTypeParameters` section:

```javascript
mathTypeParameters: {
  serviceProviderProperties: {
    URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
    server: 'java',
  },
}
```

### Render Engine

Edit `render-engine/index.html` and update the WIRISplugins.js script URL by toogling the commented line between the Local/Cloud MathType Render Engine scripts.

### Verify Backend is Running

Before using local backend, ensure the Docker backend is running:

```bash
cd ../backend/
docker compose up -d

# Test connectivity
curl http://localhost:8080/pluginwiris_engine/app/configurationjs
```

## Troubleshooting

- **Formulas not loading**: If using the on-premises services, ensure the Java backend is running and accessible at `http://localhost:8080`.
- **CORS issues**: Make sure the backend is configured to allow cross-origin requests from your frontend domain.
- **Editor not initializing**: Check browser console for JavaScript errors and verify all CDN resources are loading correctly.

## Additional Resources

- **[MathType Documentation](https://docs.wiris.com/)**: Complete configuration reference
- **Backend Integration**: See `../backend/README.md` for client-side setup

## Support & Contact

For technical support, questions, or issues related to:
- This repository and its deployment
- This MathType for Froala example
- Integration with your applications
- Any other Wiris product inquiries

**Contact us at**: support@wiris.com

When contacting support, please include:
- You customer details
- Froala version details
- Relevant log outputs
- Description of the issue and steps to reproduce


---

**© 2026 Wiris** - MathType On-Premises Backend
