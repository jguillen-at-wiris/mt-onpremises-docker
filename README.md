# MathType On-Premises Docker

A complete Docker-based deployment solution for running MathType services on-premises, providing mathematical equation editing and rendering capabilities within your own infrastructure.

## Overview

This repository contains everything needed to deploy MathType services in a containerized environment, eliminating the need for cloud-based SaaS dependencies. The solution consists of:

- **Backend Services**: Docker-containerized MathType services (Editor, Integration, and Handwriting recognition)
- **Frontend Demo**: A sample web application demonstrating MathType integration with Froala Editor
- **Configuration**: Pre-configured settings for enterprise deployment

## 🚀 Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Valid MathType license with product keys
- MathType WAR files (provided after license purchase)

### 1. Setup Backend Services

```bash
# Navigate to backend directory
cd backend/

# Replace placeholder WAR files with your licensed versions
cp /path/to/your/licensed_editor.war mathtype-wars/
cp /path/to/your/licensed_hand.war mathtype-wars/
cp /path/to/your/pluginwiris_engine.war mathtype-wars/

# Configure your license keys in configuration files
# Edit configurations/editor-web.xml and configurations/hand-web.xml

# Start the services
docker compose up -d
```

### 2. Test with Frontend Demo

```bash
# Open the frontend demo
cd ../frontend/
# Serve with any web server or open index.html directly in browser
```

## 📁 Project Structure

```
mathtype-onpremises-docker/
├── README.md                    # This file - main project documentation
├── LICENSE                      # Project license
├── backend/                     # Docker backend services
│   ├── README.md               # Detailed backend setup instructions
│   ├── docker-compose.yml     # Docker orchestration configuration
│   ├── Dockerfile.mathtype     # MathType services container definition
│   ├── entrypoint.sh          # Container initialization script
│   ├── configurations/        # Service configuration files
│   │   ├── configuration.ini  # Integration services config
│   │   ├── editor-web.xml     # Editor services config
│   │   └── hand-web.xml       # Handwriting services config
│   └── mathtype-wars/         # MathType WAR files location
│       ├── licensed_editor.war.placeholder
│       ├── licensed_hand.war.placeholder
│       └── pluginwiris_engine.war.placeholder
└── frontend/                   # Demo web application
    ├── README.md              # Frontend integration guide
    ├── index.html             # Demo HTML page
    ├── app.js                 # MathType-Froala integration
    └── styles.css             # Demo styling
```

## 📖 Documentation

- **[Backend Setup](backend/README.md)**: Detailed backend deployment guide
- **[Frontend Integration](frontend/README.md)**: Web application integration examples
- **[MathType Documentation](https://docs.wiris.com/)**: Official MathType documentation


## 📞 Support

For technical support and questions:

- **Email**: support@wiris.com
- **Documentation**: https://docs.wiris.com/
- **License Issues**: Contact your Key Account Manager

When contacting support, include:
- Customer details and license information
- Docker/system version details
- Relevant log outputs
- Description of the issue and reproduction steps

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file and it doesn't exclude the need of purchasing a MathType license.

---

**© 2026 Wiris** - MathType On-Premises Docker Solution