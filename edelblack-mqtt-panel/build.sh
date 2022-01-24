#!/bin/bash
yarn dev
rm -rf /var/lib/grafana/plugins/edelblack-mqtt-panel/
cp -r dist/ /var/lib/grafana/plugins/edelblack-mqtt-panel/
systemctl restart grafana
