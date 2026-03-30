# MathType On-Premises Backend (Docker)

This Docker-based backend provides a complete on-premises deployment of MathType services, allowing you to run mathematical equation editing and rendering services within your own infrastructure.

## Overview

The MathType on-premises backend consists of three interconnected services that work together to provide a complete mathematical equation editing experience:

### 1. MathType Editor Services
- **Purpose**: Core equation editor functionality
- **Responsibilities**:
  - Rendering mathematical equations as images or MathML
  - Converting between different mathematical formats (LaTeX, MathML, etc.)
  - Providing the editor API for creating and editing equations
- **Configuration file**: `editor-web.xml`

### 2. MathType Integration Services  
- **Purpose**: Central coordination and integration layer
- **Responsibilities**:
  - Managing global configuration settings
  - Handling communication between frontend and backend services
  - Caching rendered equations for performance optimization
  - Coordinating data flow between different services
- **Configuration file**: `configuration.ini`

### 3. MathType Handwriting Services
- **Purpose**: Handwriting recognition for mathematical equations
- **Responsibilities**:
  - Converting handwritten mathematical expressions to digital format
  - Processing touch and stylus input from devices
  - Recognizing mathematical symbols and notation
- **Configuration file**: `hand-web.xml`

## Prerequisites

Before setting up the MathType backend, ensure you have:

- **Docker** and **Docker Compose** installed on your system
- **Valid MathType license** with product keys
- **MathType WAR files** (obtained after license purchase):
  - **Javax-based WAR files**: Compatible with Apache Tomcat 9.x (current default base image)
  - **Jakarta-based WAR files**: Require Apache Tomcat 10.1+ (update `Dockerfile.mathtype` base image accordingly)
- Access to the configuration files in this repository

## Configuration Files

All service configuration files are located in the `configurations/` folder. Each file contains detailed comments explaining the available parameters:

### `editor-web.xml`
- **Purpose**: Configures the MathType Editor Services Java servlet
- **Key settings**:
  - License product key (`com.wiris.editor.license.product.key`)
  - Memory limits for text services
  - Security and CORS settings
  - Image rendering parameters

### `configuration.ini`  
- **Purpose**: Central configuration for MathType Integration Services
- **Key settings**:
  - Connection properties (host, port, path)
  - Export and rendering options
  - Caching configuration
  - Security and proxy settings
  - Service connectivity parameters

### `hand-web.xml`
- **Purpose**: Configures the MathType Handwriting Services
- **Key settings**:
  - Handwriting license product key
  - Service pool configuration (number of concurrent services)
  - Input limits (strokes, points per sample)
  - CORS configuration for web integration

> ℹ️ **Important**: All configuration files contain detailed comments explaining each parameter. Review these comments carefully when customizing your deployment.

## Setup Instructions

### Step 1: Obtain Required Files

1. **Purchase a MathType license** from Wiris
2. **Download the WAR files** after license purchase:
   - `licensed_editor.war`
   - `licensed_hand.war` 
   - `pluginwiris_engine.war`
3. **Get your product keys** for licensing

### Step 2: Replace Placeholder Files

The `mathtype-wars/` folder contains placeholder files that must be replaced with the actual WAR files:

**Required replacements:**
```bash
# Replace these placeholder files with actual WAR files:
mathtype-wars/licensed_editor.war.placeholder     → licensed_editor.war
mathtype-wars/licensed_hand.war.placeholder       → licensed_hand.war  
mathtype-wars/pluginwiris_engine.war.placeholder  → pluginwiris_engine.war
```

> ⚠️ **Critical**: The Docker image will not function without these actual WAR files. The placeholder files are only for reference.

### Step 3: Configure Services

1. **Edit `configurations/editor-web.xml`**:
   ```xml
   <!-- Replace XXXXX-XXXXX-XXXXX-XXXXX-XXXX with your actual license key -->
   <param-value>YOUR-ACTUAL-LICENSE-KEY</param-value>
   ```

2. **Edit `configurations/hand-web.xml`**:
   ```xml
   <!-- Replace XXXXX-XXXXX-XXXXX-XXXXX-XXXXX with your actual license key -->
   <add key="com.wiris.hand.license.product.key" value="YOUR-ACTUAL-LICENSE-KEY"/>
   ```

3. **Edit `configurations/configuration.ini`**:
   - Update host, port, and path settings for your environment
   - Configure caching and export options as needed

### Step 4: Deploy with Docker

1. **Navigate to the project root directory**:
   ```bash
   cd /path/to/mathtype-onpremises-docker
   ```

2. **Build and start the services**:
   ```bash
   docker compose up
   ```

3. **For background operation**:
   ```bash
   docker compose up -d
   ```

## File Acquisition

### Where to get the WAR files:
- Download link provided after license purchase
- Contact your **Key Account Manager** for assistance
- Email **support@wiris.com** if you have further questions

### License information:
- Product keys are provided with your license purchase
- Ensure your license covers all services you plan to deploy

## Docker Configuration

This deployment uses several key files:

- **`docker-compose.yml`**: Orchestrates the multi-service deployment
- **`Dockerfile.mathtype`**: Defines the MathType services container image  
- **`entrypoint.sh`**: Initialization script that:
  - Installs the WAR files in the correct locations
  - Applies configuration settings
  - Starts the MathType services
  - Handles service dependencies and startup order

## Troubleshooting

### Common issues:

1. **Services fail to start**:
   - Verify all placeholder WAR files have been replaced
   - Check that license keys are correctly configured
   - Review Docker logs: `docker compose logs`

2. **License validation errors**:
   - Ensure product keys match your purchased license
   - Verify keys are entered without extra spaces or characters
   - Contact support if license appears invalid

3. **Service connectivity issues**:
   - Check port configurations in `configuration.ini`
   - Verify firewall settings allow required ports
   - Ensure Docker networking is properly configured

### Log access:
```bash
# View all service logs
docker compose logs

# View logs for specific service
docker compose logs [service-name]

# Follow logs in real-time
docker compose logs -f
```
## Additional Resources

- **[MathType Documentation](https://docs.wiris.com/)**: Complete configuration reference
- **Frontend Integration**: See `../frontend/README.md` for client-side setup

## Support & Contact

For technical support, questions, or issues related to:
- This repository and its deployment
- MathType services configuration  
- License activation or validation
- Integration with your applications
- Any other Wiris product inquiries

**Contact us at**: support@wiris.com

When contacting support, please include:
- You customer details
- Docker and system version details
- Relevant log outputs
- Description of the issue and steps to reproduce

---

**© 2026 Wiris** - MathType On-Premises Backend




