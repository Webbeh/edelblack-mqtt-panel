import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'mqttServ',
      name: 'Server',
      description: 'WebSocket endpoint for the MQTT server',
      defaultValue: 'wss://localhost:9001/wss',
    })
    .addTextInput({
      path: 'listenTopic',
      name: 'Listen topic',
      defaultValue: 'edelblack/mqtt/panel/listen',
    })
    .addBooleanSwitch({
      path: 'canPublish',
      name: 'Allow publishing data',
      defaultValue: false
    })
    .addTextInput({
      path: 'publishTopic',
      name: 'Publish topic',
      defaultValue: 'edelblack/mqtt/panel/publish',
      showIf: (config) => config.canPublish,
    })
    .addBooleanSwitch({
      path: 'publishRetain',
      name: 'Retain',
      description: 'Send the data as retained',
      defaultValue: false,
      showIf: (config) => config.canPublish,
    })
    .addRadio({
      path: 'publishQos',
      defaultValue: 0,
      name: 'QOS',
      settings: {
        options: [
          {
            value: 0,
            label: '0',
          },
          {
            value: 1,
            label: '1',
          },
          {
            value: 2,
            label: '2',
          },
        ],
      },
      showIf: (config) => config.canPublish,
    })
    .addBooleanSwitch({
      path: 'waitBeforePublish',
      name: 'Prevent publishing until data arrived',
      defaultValue: true,
      showIf: (config) => config.canPublish,
    });
});
