#!/bin/bash

set -euo pipefail

WEBAPPS_DIR="/usr/local/tomcat/webapps"

echo "Preparing exploded webapps before Tomcat startup..."
mkdir -p "${WEBAPPS_DIR}/pluginwiris_engine" "${WEBAPPS_DIR}/editor" "${WEBAPPS_DIR}/hand"

if [ -f "${WEBAPPS_DIR}/pluginwiris_engine.war" ]; then
  echo "Unpacking pluginwiris_engine.war..."
  (cd "${WEBAPPS_DIR}/pluginwiris_engine" && jar xf "${WEBAPPS_DIR}/pluginwiris_engine.war")
fi

if [ -f "${WEBAPPS_DIR}/editor.war" ]; then
  echo "Unpacking editor.war..."
  (cd "${WEBAPPS_DIR}/editor" && jar xf "${WEBAPPS_DIR}/editor.war")
fi

if [ -f "${WEBAPPS_DIR}/hand.war" ]; then
  echo "Unpacking hand.war..."
  (cd "${WEBAPPS_DIR}/hand" && jar xf "${WEBAPPS_DIR}/hand.war")
fi

echo "Removing WAR files to prevent overwrite..."
rm -f "${WEBAPPS_DIR}/pluginwiris_engine.war" "${WEBAPPS_DIR}/editor.war" "${WEBAPPS_DIR}/hand.war"

echo "Copying configuration.ini into pluginwiris_engine..."
cp /opt/configuration.ini "${WEBAPPS_DIR}/pluginwiris_engine/WEB-INF/pluginwiris/configuration.ini"

echo "Copying editor-web.xml into editor service..."
cp /opt/editor-web.xml "${WEBAPPS_DIR}/editor/WEB-INF/web.xml"

echo "Copying hand-web.xml into hand service..."
cp /opt/hand-web.xml "${WEBAPPS_DIR}/hand/WEB-INF/web.xml"

echo "Starting Tomcat in foreground..."
exec catalina.sh run