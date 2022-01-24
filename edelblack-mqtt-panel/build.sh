#!/bin/bash
git pull
yarn dev
git restore src/module.ts
rm -rf /var/lib/grafana/plugins/edelblack-mqtt-panel/
cp -r dist/ /var/lib/grafana/plugins/edelblack-mqtt-panel/
systemctl restart grafana
