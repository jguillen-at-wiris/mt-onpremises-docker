#!/bin/bash

echo "Starting Tomcat in background to allow WARs to unpack..."
catalina.sh start

echo "Waiting for pluginwiris_engine to unpack..."
while [ ! -d /usr/local/tomcat/webapps/pluginwiris_engine/WEB-INF ]; do sleep 1; done

echo "Waiting for editor to unpack..."
while [ ! -d /usr/local/tomcat/webapps/editor/WEB-INF ]; do sleep 1; done

echo "Waiting for hand to unpack..."
while [ ! -d /usr/local/tomcat/webapps/hand/WEB-INF ]; do sleep 1; done

echo "Removing WAR files to prevent overwrite..."
rm -f /usr/local/tomcat/webapps/pluginwiris_engine.war
rm -f /usr/local/tomcat/webapps/editor.war
rm -f /usr/local/tomcat/webapps/hand.war

echo "Copying configuration.ini into pluginwiris_engine..."
cp /opt/configuration.ini /usr/local/tomcat/webapps/pluginwiris_engine/WEB-INF/pluginwiris/configuration.ini

echo "Copying editor-web.xml into editor service..."
cp /opt/editor-web.xml /usr/local/tomcat/webapps/editor/WEB-INF/web.xml

echo "Copying hand-web.xml into hand service..."
cp /opt/hand-web.xml /usr/local/tomcat/webapps/hand/WEB-INF/web.xml

echo "Stopping Tomcat after unpack..."
catalina.sh stop

echo "Waiting for Tomcat to fully shut down..."
sleep 5

echo "Restarting Tomcat in foreground..."
exec catalina.sh run
