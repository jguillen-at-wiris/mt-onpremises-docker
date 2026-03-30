# MathType On-Premises Frontend (Demo)

This is a simple frontend demo showcasing the integration of MathType with the Froala Editor.

## Overview

This demo demonstrates how to integrate MathType's mathematical formula editor with Froala Editor in a web application. The integration is configured to consume MathType SaaS as backend services by default, but also displays how to use a local Java backend running MathType services for formula processing and rendering, making it suitable for on-premises deployments where internet connectivity or cloud services are not available.

## Prerequisites

- Modern web browser with JavaScript enabled
- Local web server (optional, for serving files over HTTP)
- On-premises backend: A running Java backend service (see `../backend/` directory)s

## Demo Files

This repository contains the minimal code required for a MathType-Froala integration:

- **index.html**: The main HTML page that sets up the Froala editor with MathType integration. It includes:
  - Froala Editor CSS and JavaScript libraries from CDN
  - MathType core library for formula rendering
  - MathType-Froala connector plugin
  - Basic HTML structure with an editor container

- **app.js**: JavaScript configuration file that initializes the Froala editor with MathType settings:
  - Configures the editor height and toolbar buttons
  - Sets up MathType and Chemistry editor buttons
  - Configures HTML tags and attributes for mathematical formulas
  - Comments how to point to a local Java backend service at `http://localhost:8080`
  - Enables image editing with MathType tools

- **styles.css**: Basic CSS styling for the demo interface:
  - Modern typography using system fonts
  - Responsive container layout
  - Clean, minimal styling for the demo page

## On-premises backend configuration

The integration is configured to use MathType SaaS by default. For it to point to a local Java backend running MathType services, the following settings need to be added in the `app.js` file:

```javascript
mathTypeParameters: {
  serviceProviderProperties: {
    URI: 'http://localhost:8080/pluginwiris_engine/app/configurationjs',
    server: 'java',
  },
}
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
